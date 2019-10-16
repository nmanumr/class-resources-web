import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {ProfileService} from '../shared/services/profile.service';
import {LoadingIndicatorService} from '../shared/services/loading-indicator.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

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
        private router: Router,
        media: MediaMatcher,
        private profileService: ProfileService,
        public loader: LoadingIndicatorService,
        private afAuth: AngularFireAuth
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

    async logout() {
        this.loader.startLoader();
        await this.afAuth.auth.signOut();
        await this.router.navigateByUrl('/auth/login');
    }
}
