import {Pipe, PipeTransform} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';

@Pipe({name: 'loadRefs'})
export class LoadRefsPipe implements PipeTransform {

    constructor(private afs: AngularFirestore) {
    }

    transform(input: DocumentReference[] | DocumentReference): Observable<any> {
        if (!Array.isArray(input)) {
            return this.afs.doc(input.path).snapshotChanges();
        } else {
            return new Observable((observer: Observer<any>) => {
                const documents = {};
                for (const document of input) {
                    this.afs.doc(document.path).snapshotChanges().subscribe(data => {
                        documents[data.payload.id] = data.payload.data();
                        observer.next(this.arrayFromObject(documents));
                    });
                }
                observer.next(this.arrayFromObject(documents));
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
