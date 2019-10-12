import {Component} from '@angular/core';
import {LoadingIndicatorService} from './shared/services/loading-indicator.service';
import {NavigationStart, Router} from '@angular/router';
import {distinctUntilChanged, filter} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private loader: LoadingIndicatorService, private router: Router) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationStart),
            distinctUntilChanged()
        ).subscribe(() => this.loader.startLoader());
    }
}
