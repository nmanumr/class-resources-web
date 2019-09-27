import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {MatButtonModule, MatDividerModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';


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
    ],
})
export class DashboardModule {
}
