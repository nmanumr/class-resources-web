import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoursesRoutingModule} from './courses-routing.module';
import {CourseListComponent} from './course-list/course-list.component';
import {LoadRefsPipe} from '../shared/pipes/loadRefs.pipe';
import {ReversePipe} from '../shared/pipes/reverse.pipe';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule
} from '@angular/material';
import {TextAvatarComponent} from '../shared/components/text-avatar/text-avatar.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {ResourcesComponent} from './resources/resources.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
    declarations: [
        CourseListComponent,
        LoadRefsPipe,
        ReversePipe,
        TextAvatarComponent,
        CourseDetailComponent,
        ResourcesComponent
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        MatListModule,
        MatIconModule,
        MatTabsModule,
        MatCheckboxModule,
        SharedModule,
        MatMenuModule,
        MatButtonModule,
    ],
    providers: []
})
export class CoursesModule {
}
