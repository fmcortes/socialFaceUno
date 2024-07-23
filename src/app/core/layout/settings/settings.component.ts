import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @ViewChild('settingsMenu') settingsMenu: ElementRef<HTMLElement> | undefined;

  settingsMenuToggle(): void {
    this.settingsMenu?.nativeElement.classList.toggle('settings-menu-height');
  }

  darkMode():void {}
}
