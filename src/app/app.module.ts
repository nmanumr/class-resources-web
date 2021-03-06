import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireFunctionsModule, FUNCTIONS_ORIGIN} from '@angular/fire/functions';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,

        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,

        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule.enablePersistence(),
        AngularFireAuthModule,
        AngularFireFunctionsModule,
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
    schemas: []
})
export class AppModule {
}
