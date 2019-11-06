import {EventEmitter, Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserService} from '../../auth/user.service';
import {IProfile} from '../models/profile.model';
import {ISemester} from '../models/semester.model';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    profile: IProfile;
    profileChanges = new EventEmitter();

    constructor(private afs: AngularFirestore, public userService: UserService) {
    }

    async isProfileExist() {
        const user = this.userService.getCurrentUser();
        if (!user) {
            return false;
        }
        const snap = await this.afs.doc(`/users/${user.uid}`).get().toPromise();
        return snap.exists;
    }

    loadProfile() {
        const user = this.userService.getCurrentUser();
        return this.afs.doc(`/users/${user.uid}`).valueChanges().subscribe(data => {
            this.profile = data as IProfile;
            this.profileChanges.emit(true);
        });
    }

    getSemesters(): Observable<ISemester[]> {
        const user = this.userService.getCurrentUser();
        return this.afs.collection<ISemester>(`/users/${user.uid}/semesters`).valueChanges();
    }

    async updateProfile(name: string, rollNum: string) {
        const user = this.userService.getCurrentUser();
        return await this.afs.doc(`/users/${user.uid}`).set({
            name,
            rollNum
        }, {merge: true});
    }
}
