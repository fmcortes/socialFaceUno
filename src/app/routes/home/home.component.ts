import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { AuthFacade } from 'src/app/core/layout/auth-layout/store/auth/auth-facade';
import { PostFacade } from 'src/app/shared/components/posts/store/posts-facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private postFacade: PostFacade, private authFacade: AuthFacade) {}

  currentPage = 0;

  data$ = combineLatest({
    posts: this.postFacade.posts$,
    currentUser: this.authFacade.currentUser$,
  });

  ngOnInit(): void {    
    this.getPostData();
  }

  getPostData() {
    this.currentPage++;
    this.postFacade.fetchPosts(this.currentPage, true);
  }
}
