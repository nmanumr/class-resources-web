import {Component, Input, OnInit} from '@angular/core';
import {IResource} from '../../shared/models/resource.model';
import {CourseService} from '../../shared/services/course.service';

@Component({
    selector: 'app-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
    @Input() course: string;
    resources: IResource[];

    constructor(private courseService: CourseService) {
    }

    ngOnInit() {
        this.courseService.getResources(this.course).subscribe(data => {
            this.resources = data;
        });
    }

}
