import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {canActivate, redirectLoggedInTo} from '@angular/fire/auth-guard';

const redirectLoggedInToDashboard = redirectLoggedInTo(['dashboard']);

const routes: Routes = [{
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectLoggedInToDashboard)
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
