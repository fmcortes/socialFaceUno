import { Component } from '@angular/core';
import { AuthFacade } from 'src/app/core/layout/auth-layout/store/auth/auth-facade';
import { ProfileInterface } from '../types/profile.interface';

@Component({
  selector: 'app-post-writer',
  templateUrl: './post-writer.component.html',
  styleUrls: ['./post-writer.component.scss'],
})
export class PostWriterComponent {
  profileUser: ProfileInterface | null = null;

  constructor(private authFacade: AuthFacade) {
    this.authFacade.currentUser$.subscribe((currentUser) => {
      if (currentUser) {
        this.profileUser = {
          following: false,
          id: currentUser.id,
          username: `${currentUser.firstname} ${currentUser.lastname}`,
          image: currentUser.image || '',
        };
      }
    });
  }
}
