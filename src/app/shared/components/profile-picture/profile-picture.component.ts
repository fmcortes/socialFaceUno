import { Component, Input } from '@angular/core';
import { CurrentUserInterface } from '../../types/current-user.interface';
import { ProfileInterface } from 'src/app/shared/components/posts/types/profile.interface';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
})
export class ProfilePictureComponent {
  @Input() showProfileLink: boolean = false;
  @Input() userProfile?: Partial<CurrentUserInterface> | null | undefined;
}
