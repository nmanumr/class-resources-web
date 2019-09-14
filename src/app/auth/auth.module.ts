import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatInputModule, MatSnackBarModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthComponent} from './auth.component';
import {AuthService} from './auth.service';
import {ProviderButtonComponent} from '../components/provider-button/provider-button.component';
import {HttpClientModule} from '@angular/common/http';


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
        AuthService
    ],
    bootstrap: [AuthComponent]
})
export class AuthModule {
}
