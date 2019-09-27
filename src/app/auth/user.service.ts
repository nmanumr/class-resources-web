import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {firebase} from '@firebase/app';
import '@firebase/auth';
import UserCredential = firebase.auth.UserCredential;

export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export enum Provider {
    GOOGLE = 'google',
    GITHUB = 'github',
    PHONE = 'phone',
    FACEBOOK = 'facebook',
    EmailAndPassword = 'firebase',
}

export interface ICredentials {
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class UserService {


    constructor(public afAuth: AngularFireAuth) {
    }

    getCurrentUser() {
        return this.afAuth.auth.currentUser;
    }

    async loginWithEmail(email: string, pass: string): Promise<UserCredential | null> {
        return await this.loginWithProvider(Provider.EmailAndPassword, {
            email: email,
            password: pass
        });
    }

    async loginWithProvider(provider: Provider, credentials?: ICredentials): Promise<UserCredential | any> {
        let signInResult: UserCredential | any;

        switch (provider) {
            case Provider.GOOGLE:
                signInResult = await this.afAuth.auth.signInWithPopup(googleAuthProvider) as UserCredential;
                break;

            case Provider.GITHUB:
                signInResult = await this.afAuth.auth.signInWithPopup(githubAuthProvider) as UserCredential;
                break;

            case Provider.FACEBOOK:
                signInResult = await this.afAuth.auth.signInWithPopup(facebookAuthProvider) as UserCredential;
                break;

            case Provider.EmailAndPassword:
                signInResult = await this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
                break;

            default:
                throw new Error(`${Provider[provider]} is not available as auth provider`);
        }

        return signInResult;
    }
}
