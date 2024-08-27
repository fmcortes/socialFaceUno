import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthFacade } from '../auth-layout/store/auth/auth-facade';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @ViewChild('settingsMenu') settingsMenu: ElementRef<HTMLElement> | undefined;

  data$ = combineLatest({
    currentUser: this.authFacade.currentUser$
  })


  constructor(private authFacade: AuthFacade) {}

  settingsMenuToggle(): void {
    this.settingsMenu?.nativeElement.classList.toggle('settings-menu-height');
  }

  logout(): void {
    this.authFacade.logOut();
  }
}
