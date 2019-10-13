import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {IResource} from '../../shared/models/resource.model';
import {CourseService} from '../../shared/services/course.service';
import {MatMenuTrigger} from '@angular/material';

@Component({
    selector: 'app-resources',
    templateUrl: './resources.component.html',
    styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
    @Input() course: string;
    resources: IResource[];
    @ViewChild(MatMenuTrigger, {static: false}) contextMenu: MatMenuTrigger;
    contextMenuPosition = {x: '0px', y: '0px'};

    constructor(private courseService: CourseService) {
    }

    ngOnInit() {
        this.courseService.getResources(this.course).subscribe(data => {
            this.resources = data;
        });
    }

    onContextMenu(event: MouseEvent, resource) {
        event.preventDefault();
        resource.selected = true;
        console.log(event.clientX, event.clientY);
        this.contextMenuPosition.x = event.clientX + 'px';
        this.contextMenuPosition.y = event.clientY + 'px';
        this.contextMenu.menuData = {resource};
        this.contextMenu.openMenu();
    }

    getOpenUrl(resource) {
        return resource.openUrl || `https://drive.google.com/file/d/${resource.driveFileId}/view`;
    }

    selectAll() {
        // @ts-ignore
        this.resources.forEach(r => r.selected = true);
    }

    deselectAll() {
        // @ts-ignore
        this.resources.forEach(r => r.selected = false);
    }

    getSelectedResources() {
        // @ts-ignore
        return this.resources.filter(r => !!r.selected);
    }
}
