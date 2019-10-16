import {EventEmitter, Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';

export interface Action {
    label: string;
    handler: () => void;
}

export interface BreadCrumb {
    label: string;
    url: string;
    disabled: boolean,
    actions?: Action[];
}

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbService {

    breadcrumbsEvents = new EventEmitter<BreadCrumb[]>();
    private actions: Action[];
    private breadcrumbs: BreadCrumb[] = [];

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            distinctUntilChanged(),
            map(() => {
                this.actions = [];
                return this.buildBreadCrumb(this.activatedRoute.root);
            })
        ).subscribe(data => {
            this.breadcrumbs = data;
            this.breadcrumbsEvents.emit(this.breadcrumbs);
        });
    }

    addActions(actions: Action[]) {
        this.actions = actions;
        if (this.breadcrumbs.length) {
            this.breadcrumbs[this.breadcrumbs.length - 1].actions = actions;
            this.breadcrumbsEvents.emit(this.breadcrumbs);
        }
    }

    buildBreadCrumb(route: ActivatedRoute, url: string = '',
                    breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {

        const path = route.routeConfig ? route.routeConfig.path : '';
        const nextUrl = `${url}${path}/`;

        // Only add routes with `breadcrumb` in data
        if (route.routeConfig && route.routeConfig.data && (route.routeConfig.data.breadcrumb || route.routeConfig.data.breadcrumbParser)) {
            const label = route.routeConfig.data.breadcrumb || route.routeConfig.data.breadcrumbParser(this.router.url);
            const breadcrumb = {
                label,
                url: nextUrl,
                disabled: route.routeConfig.data.breadcrumbDisabled || false
            };
            breadcrumbs.push(breadcrumb);
        }

        if (route.firstChild) {
            // If we are not on our current path yet,
            // there will be more children to look after, to build our breadcrumb
            return this.buildBreadCrumb(route.firstChild, nextUrl, breadcrumbs);
        } else {
            breadcrumbs[breadcrumbs.length - 1].url = this.router.url;
            breadcrumbs[breadcrumbs.length - 1].actions = this.actions;
        }
        return breadcrumbs;
    }
}
