import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OrigamiModule} from '@codebakery/origami';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatToolbarModule} from '@angular/material';
import {HeaderComponent} from './components/header/header.component';
import {DrawerComponent} from './components/drawer/drawer.component';
import {AuthModule} from './auth/auth.module';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        DrawerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        OrigamiModule,
        BrowserAnimationsModule,

        AuthModule,

        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,

        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {
}
