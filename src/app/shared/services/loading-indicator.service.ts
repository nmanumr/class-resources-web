import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LoadingIndicatorService {
    isLoading = true;

    startLoader() {
        this.isLoading = true;
    }

    stopLoader() {
        this.isLoading = false;
    }

    toggleLoader() {
        this.isLoading = !this.isLoading;
    }
}
