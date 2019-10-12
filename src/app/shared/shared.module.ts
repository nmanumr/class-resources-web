import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';
import {MatIconModule, MatMenuModule} from '@angular/material';


@NgModule({
    declarations: [
        BreadcrumbComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatMenuModule
    ],
    exports: [
        BreadcrumbComponent
    ]
})
export class SharedModule {
}
