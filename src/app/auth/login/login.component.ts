import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService, Provider} from '../auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    returnUrl: string;
    form: FormGroup;
    serverError: string;

    private providers = [
        Provider.GOOGLE,
        Provider.FACEBOOK,
        Provider.GITHUB,
        // Provider.PHONE,
    ];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private authService: AuthService,
    ) {
    }

    ngOnInit() {
        this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
        this.form = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required],
        });
    }

    async performLogin() {
        if (!this.form.valid) {
            return;
        }

        const email = this.form.controls.email.value;
        const password = this.form.controls.password.value;

        try {
            await this.authService.loginWithEmail(email, password);
            this.router.navigate([this.returnUrl]);
        } catch (e) {
            this.serverError = 'An unknown error occurred';
            const errorCode = e.code;
            const errorMessage = e.message;

            if (errorCode === 'auth/wrong-password') {
                this.serverError = 'Wrong password';
            } else {
                this.serverError = errorMessage;
            }
        }
    }

    async handleProvider(provider: Provider) {
        try {
            console.log(await this.authService.loginWithProvider(provider));
        } catch (e) {
            console.log(e);
        }
    }
}
