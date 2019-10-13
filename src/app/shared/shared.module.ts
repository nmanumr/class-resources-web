import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {RouterModule} from '@angular/router';
import {MatIconModule, MatMenuModule} from '@angular/material';
import { FileIconComponent } from './components/file-icon/file-icon.component';


@NgModule({
    declarations: [
        BreadcrumbComponent,
        FileIconComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
        MatMenuModule
    ],
    exports: [
        BreadcrumbComponent,
        FileIconComponent
    ]
})
export class SharedModule {
}
