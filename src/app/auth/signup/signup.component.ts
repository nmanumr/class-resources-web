import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Provider, UserService} from '../user.service';
import {ErrorStateMatcher} from '@angular/material';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    returnUrl: string;
    form: FormGroup;
    serverError: string;

    matcher = new MyErrorStateMatcher();
    showPass = false;
    showPass2 = false;

    providers = [
        Provider.GOOGLE,
        Provider.FACEBOOK,
        Provider.GITHUB,
    ];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private authService: UserService,
    ) {
    }

    ngOnInit() {
        this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
        this.form = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required],
            password2: [null, Validators.required],
        }, {validator: this.checkPasswords});
    }

    checkPasswords(group: FormGroup) { // here we have the 'passwords' group
        const pass = group.get('password').value;
        const confirmPass = group.get('password2').value;

        if (!group.get('password2').dirty) {
            return null;
        }

        return pass === confirmPass ? null : {notSame: true};
    }

    async handleProvider(provider: Provider) {
        this.form.markAsPristine();
        try {
            await this.authService.loginWithProvider(provider);
            this.router.navigate([this.returnUrl]);
        } catch (e) {
            this.serverError = e.message;
            console.log(e);
        }
    }

    async signup() {
        if (!this.form.valid) {
            return;
        }

        const email = this.form.controls.email.value;
        const password = this.form.controls.password.value;

        try {
            await this.authService.signupWithEmail(email, password);
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
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

        return (invalidCtrl || invalidParent);
    }
}
