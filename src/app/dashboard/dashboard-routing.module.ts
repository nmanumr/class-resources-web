import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import {map} from 'rxjs/operators';

const redirectUnauthorizedToLogin = () => map(user => !user ? ['auth/login'] : true );

const routes: Routes = [{
    path: '',
    component: DashboardComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
        authGuardPipe: redirectUnauthorizedToLogin,
    },
    children: [
        {
            path: '',
            pathMatch: 'full',
            redirectTo: 'courses',
        },
        {
            path: 'courses',
            loadChildren: () => import('../courses/courses.module').then(m => m.CoursesModule),
            data: {
                breadcrumb: 'Courses'
            }
        },
        {
            path: 'timetable',
            loadChildren: () => import('../timetable/timetable.module').then(m => m.TimetableModule),
            data: {
                breadcrumb: 'Timetable'
            }
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
