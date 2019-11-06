import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AngularFireAuthGuard, canActivate, redirectLoggedInTo} from '@angular/fire/auth-guard';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {map} from 'rxjs/operators';
import {SignupComponent} from './signup/signup.component';

const redirectLoggedInToDashboard = redirectLoggedInTo(['dashboard']);
const redirectUnauthorizedToLogin = () => map(user => !user ? ['auth/login'] : true );

const routes: Routes = [{
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToDashboard)
}, {
    path: 'signup',
    component: SignupComponent,
    ...canActivate(redirectLoggedInToDashboard)
}, {
    path: 'create-profile',
    component: EditProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
        authGuardPipe: redirectUnauthorizedToLogin,
    },
}, {
    path: 'edit-profile',
    component: EditProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
        authGuardPipe: redirectUnauthorizedToLogin,
    },
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
