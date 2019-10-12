import {Component} from '@angular/core';
import {BreadCrumb, BreadcrumbService} from '../../services/breadcrumb.service';

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {

    breadcrumbs: BreadCrumb[] = [];

    constructor(private breadcrumbService: BreadcrumbService) {
        this.breadcrumbService.breadcrumbsEvents.subscribe(
            data => this.breadcrumbs = data
        );
    }
}
