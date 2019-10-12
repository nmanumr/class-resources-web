import {Pipe, PipeTransform} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import {LoadingIndicatorService} from '../services/loading-indicator.service';

@Pipe({name: 'loadRefs'})
export class LoadRefsPipe implements PipeTransform {

    constructor(private afs: AngularFirestore, private loader: LoadingIndicatorService) {
    }

    transform(input: DocumentReference[] | DocumentReference): Observable<any> {
        if (!Array.isArray(input)) {
            return new Observable((observer) => {
                this.afs.doc(input.path).snapshotChanges().subscribe(data => {
                    observer.next(data);
                    this.loader.stopLoader();
                });
            });
        } else {
            return new Observable((observer: Observer<any>) => {
                const documents = {};
                for (const document of input) {
                    this.afs.doc(document.path).snapshotChanges().subscribe(data => {
                        documents[data.payload.id] = data.payload.data();
                        observer.next(this.arrayFromObject(documents));

                        if (Object.keys(documents).length === input.length) {
                            this.loader.stopLoader();
                        }
                    });
                }
            });
        }
    }

    private arrayFromObject(obj) {
        const arr = [];
        for (const key of Object.keys(obj)) {
            arr.push({
                id: key,
                ...obj[key]
            });
        }
        return arr;
    }
}
