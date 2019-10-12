import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../shared/services/profile.service';
import {IProfile} from '../../shared/models/profile.model';
import {ISemester} from '../../shared/models/semester.model';
import {Observable} from 'rxjs';
import {BreadcrumbService} from '../../shared/services/breadcrumb.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
    profile: IProfile;
    semesters: Observable<ISemester[]>;

    displayedColumns = ['title', 'teacher'];

    constructor(public profileService: ProfileService, private breadcrumb: BreadcrumbService, private router: Router) {
        this.loadProfile();

        this.profileService.profileChanges.subscribe(() => this.loadProfile());
        this.semesters = this.profileService.getSemesters();
    }

    loadProfile() {
        this.profile = this.profileService.profile;
    }

    ngOnInit() {
        this.breadcrumb.addActions([
            {
                label: 'Time Table',
                handler: () => this.router.navigateByUrl('/dashboard/timetable')
            },
            {
                label: 'Profile',
                handler: () => this.router.navigateByUrl('/dashboard/profile')
            }
        ]);
    }

}
