import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule, MatProgressBarModule,
    MatSelectModule,
    MatSnackBarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';
import {UserService} from './user.service';
import {ProviderButtonComponent} from '../shared/components/provider-button/provider-button.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        ProviderButtonComponent,
        EditProfileComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        HttpClientModule,

        AngularFireAuthGuardModule,

        FormsModule,
        ReactiveFormsModule,

        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        MatDividerModule,
        MatSelectModule,
        MatProgressBarModule,
    ],
    providers: [
        UserService
    ],
    bootstrap: [AuthComponent]
})
export class AuthModule {
}
