import {Component, Input, OnInit} from '@angular/core';
import {Provider} from '../../../auth/user.service';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-provider-button',
    templateUrl: './provider-button.component.html',
    styleUrls: ['./provider-button.component.css']
})
export class ProviderButtonComponent implements OnInit {

    @Input() provider: Provider;

    private providerColors = {
        google: '#db4437',
        github: '#000000',
        phone: '#018d5f',
        facebook: '#385899'
    };

    constructor(iconRegistry: MatIconRegistry,
                sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'facebook',
            sanitizer.bypassSecurityTrustResourceUrl('assets/provider-icons/facebook.svg'));
        iconRegistry.addSvgIcon(
            'github',
            sanitizer.bypassSecurityTrustResourceUrl('assets/provider-icons/github.svg'));
        iconRegistry.addSvgIcon(
            'google',
            sanitizer.bypassSecurityTrustResourceUrl('assets/provider-icons/google.svg'));
    }

    ngOnInit() {
    }

}
