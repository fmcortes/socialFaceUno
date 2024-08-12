import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { AuthFacade } from 'src/app/core/layout/auth-layout/store/auth/auth-facade';
import { PostFacade } from 'src/app/shared/components/posts/store/posts-facade';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  constructor(private postFacade: PostFacade, private authFacade: AuthFacade) {}
  currentPage = 1;

  data$ = combineLatest({
    posts: this.postFacade.posts$,
    currentUser: this.authFacade.currentUser$,
  });

  ngOnInit(): void {
    this.getPostData();
  }

  getPostData() {
    this.postFacade.fetchPosts(this.currentPage, false);
  }
}
