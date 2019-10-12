import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {ICourse} from '../models/course.model';
import {Observable} from 'rxjs';
import {IResource} from '../models/resource.model';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    constructor(private afs: AngularFirestore) {
    }

    getCourse(id: string): Observable<ICourse> {
        return this.afs.doc<ICourse>(`/subjects/${id}`).valueChanges();
    }

    getResources(id: string): Observable<IResource[]> {
        return this.afs.collection<IResource>(`/subjects/${id}/resources`, ref => ref.orderBy('date')).valueChanges();
    }
}
