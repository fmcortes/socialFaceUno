import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthFacade } from '../../../../core/layout/auth-layout/store/auth/auth-facade';
import { CurrentUserInterface } from '../../../../shared/types/current-user.interface';
import { filter } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authFacade: AuthFacade
  ) {}

  form = this.formBuilder.nonNullable.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    phonenumber: [''],
    notifications: ['', Validators.required],
  });

  currentUser?: CurrentUserInterface | null;

  ngOnInit(): void {
    this.authFacade.currentUser$
      .pipe(filter((currentUser) => currentUser !== null))
      .subscribe((currentUser) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  initializeForm(): void {

    if (!this.currentUser) {
      throw new Error('Current user is not set');
    }
    this.form.patchValue({
      firstname: this.currentUser.firstname,
      lastname: this.currentUser.lastname,
      phonenumber: this.currentUser.phonenumber,
      notifications: this.currentUser.notifications,
    });
  }

  onSubmit(): void {
    if (!this.currentUser) {
      throw new Error('current user is not set');
    }
    const currentUserRequest: CurrentUserInterface = {
      ...this.currentUser,
      ...this.form.getRawValue(),
    };
    this.authFacade.updateCurrentUser(currentUserRequest)

  }
}
