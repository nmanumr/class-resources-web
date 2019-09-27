import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';
import {UserService} from './user.service';
import {ProviderButtonComponent} from '../components/provider-button/provider-button.component';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';


@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        ProviderButtonComponent
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
    ],
    providers: [
        UserService
    ],
    bootstrap: [AuthComponent]
})
export class AuthModule {
}
