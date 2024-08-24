import { Component, Input } from '@angular/core';
import { CurrentUserInterface } from '../../types/current-user.interface';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent {
  @Input() userProfile: CurrentUserInterface | null = null;
}
