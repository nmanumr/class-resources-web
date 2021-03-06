import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule, MatMenuModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import {SharedModule} from '../shared/shared.module';
import {UserProfileGuardServiceGuard} from './guards/user-profile-guard.service';


@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,

        AngularFireAuthGuardModule,

        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatDividerModule,
        SharedModule,
        MatProgressBarModule,
        MatMenuModule
    ],
    providers: [
        UserProfileGuardServiceGuard
    ]
})
export class DashboardModule {
}
