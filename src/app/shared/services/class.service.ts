import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})
export class ClassService {

    constructor(private afs: AngularFirestore) {
    }
}
