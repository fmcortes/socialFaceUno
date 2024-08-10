import { Component, OnInit } from '@angular/core';
import { PostFacade } from './store/posts-facade';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  constructor(private postFacade: PostFacade) {}

  currentPage = 1;
  data$ = combineLatest({
    posts: this.postFacade.posts$,
  });

  ngOnInit(): void {
    this.getPostData();
  }

  onScrollDown(): void {
    this.currentPage++;
    this.getPostData();
  }

  getPostData() {
    this.postFacade.fetchPosts(this.currentPage, true);
  }
}
