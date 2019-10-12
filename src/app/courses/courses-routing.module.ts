import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';


const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: CourseListComponent
}, {
    path: ':id',
    pathMatch: 'full',
    component: CourseDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
