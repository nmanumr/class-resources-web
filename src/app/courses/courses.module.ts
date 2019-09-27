import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
import {LoadRefsPipe} from '../shared/pipes/loadRefs.pipe';
import {ReversePipe} from '../shared/pipes/reverse.pipe';
import {MatIconModule, MatListModule} from '@angular/material';
import {TextAvatarComponent} from '../components/text-avatar/text-avatar.component';


@NgModule({
    declarations: [
        CourseListComponent,
        LoadRefsPipe,
        ReversePipe,
        TextAvatarComponent
    ],
    imports: [
        CommonModule,
        CoursesRoutingModule,
        MatListModule,
        MatIconModule
    ]
})
export class CoursesModule { }
