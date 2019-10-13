import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {ProfileService} from '../shared/services/profile.service';
import {LoadingIndicatorService} from '../shared/services/loading-indicator.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnDestroy {

    mobileQuery: MediaQueryList;

    private mobileQueryListener: () => void;
    photoUrl: string;

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        private profileService: ProfileService,
        public loader: LoadingIndicatorService
    ) {
        this.mobileQuery = media.matchMedia('(max-width: 960px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);

        this.profileService.loadProfile();
        this.photoUrl = this.profileService.userService.getCurrentUser().photoURL;
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }
}
