import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route} from '@angular/router';
import {ProfileService} from '../../shared/services/profile.service';

@Injectable()
export class UserProfileGuardServiceGuard implements CanActivate {


    constructor(private profileService: ProfileService, private router: Router) {
    }

    async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        if (await this.profileService.isProfileExist()) {
            console.log('here');
            return true;
        }

        console.log('here2');
        this.router.navigate(['/auth/create-profile']);
        return false;
    }

}
