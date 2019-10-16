import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseDetailComponent} from './course-detail/course-detail.component';
import {AngularFireAuthGuard, canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const coursesNameParser = (url: string) => {
    const id = url.split('/').pop();
    if (id.split('-').length === 2) {
        return id.split('-')[1];
    } else {
        return id.split('--')[1];
    }
};

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: CourseListComponent,
}, {
    path: ':id',
    pathMatch: 'full',
    component: CourseDetailComponent,
    data: {
        breadcrumbParser: coursesNameParser,
        //     breadcrumbParser: (url: string) => {
        //         const id = url.split('/').pop();
        //         if (id.split('-').length === 2) {
        //             return id.split('-')[1];
        //         } else {
        //             return id.split('--')[1];
        //         }
        //     }
    }
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule {
}
