import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {IClass} from '../models/class.model';
import {map} from 'rxjs/operators';
import {AngularFireFunctions} from '@angular/fire/functions';

@Injectable({
    providedIn: 'root'
})
export class ClassService {

    constructor(
        private afs: AngularFirestore,
        private fns: AngularFireFunctions
    ) {
    }

    getAllClass(): Observable<IClass[]> {
        return this.afs.collection('classes').snapshotChanges().pipe(
            map<any[], IClass[]>(actions => actions.map(a => {
                return {
                    id: a.payload.doc.id,
                    ...a.payload.doc.data()
                };
            }))
        );
    }

    async updateClass(id: string) {
        const callable = this.fns.httpsCallable('syncUserCourses');
        return await callable.call(null, {class: id});
    }
}
