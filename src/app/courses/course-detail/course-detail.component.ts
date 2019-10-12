import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from 'src/app/shared/services/course.service';
import {ICourse} from '../../shared/models/course.model';
import {LoadingIndicatorService} from '../../shared/services/loading-indicator.service';

@Component({
    selector: 'app-course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
    course: ICourse;
    courseId: string;

    constructor(private route: ActivatedRoute, private courseService: CourseService, private loader: LoadingIndicatorService) {
        this.route.params.subscribe(params => {
            this.courseId = params.id;
            this.courseService.getCourse(this.courseId).subscribe(data => {
                this.course = data;
                loader.stopLoader();
            });
        });
    }

    ngOnInit() {
    }

}
