import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfileService} from '../../shared/services/profile.service';
import {IProfile} from '../../shared/models/profile.model';
import {IClass} from '../../shared/models/class.model';
import {ClassService} from '../../shared/services/class.service';
import {UserService} from '../user.service';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
    returnUrl: string;
    form: FormGroup;
    serverError: string;
    profile: IProfile;
    classes: IClass[];
    isLoading = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private profileService: ProfileService,
        private classService: ClassService,
        public userService: UserService,
        private router: Router,
    ) {
    }

    ngOnInit() {
        this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
        this.loadClasses();

        this.form = this.formBuilder.group({
            name: [null, Validators.required],
            klass: [null, Validators.required],
            rollNum: [null, [Validators.required, Validators.pattern(/\w{2}\d{2}-\w{3}-\d{3}/)]],
        });

        if ('edit-profile'.indexOf(this.activatedRoute.snapshot.url.join('/')) > -1) {
            this.profileService.loadProfile();

            setTimeout(() => this.loadProfile(), 100);
            this.profileService.profileChanges.subscribe(() => this.loadProfile());
        } else {
            const user = this.userService.getCurrentUser();
            if (user.displayName) {
                this.form.controls.name.setValue(user.displayName);
            }
        }
    }

    loadProfile() {
        this.profile = this.profileService.profile;
        this.form.controls.name.setValue(this.profile.name);
        this.form.controls.rollNum.setValue(this.profile.rollNum);
        this.form.controls.klass.setValue(this.profile.class.id);
    }

    loadClasses() {
        this.classService.getAllClass().subscribe(data => {
            this.classes = data;
            console.log(data);
        });
    }

    async saveProfile() {
        this.isLoading = true;
        await Promise.all([
            this.profileService.updateProfile(
                this.form.controls.name.value,
                this.form.controls.rollNum.value
            ),
            this.classService.updateClass(this.form.controls.klass.value)
        ]);

        this.isLoading = false;
        await this.router.navigate([this.returnUrl]);
    }
}
