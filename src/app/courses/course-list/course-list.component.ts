import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../shared/services/profile.service';
import {IProfile} from '../../shared/models/profile.model';
import {ISemester} from '../../shared/models/semester.model';
import {Observable} from 'rxjs';
import {BreadcrumbService} from '../../shared/services/breadcrumb.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
    profile: IProfile;
    semesters: Observable<ISemester[]>;

    constructor(public profileService: ProfileService, private breadcrumb: BreadcrumbService) {
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
                handler: () => {
                }
            },
            {
                label: 'Profile',
                handler: () => {
                }
            }
        ]);
    }

}
