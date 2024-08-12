import { Component, EventEmitter, Input,  Output } from '@angular/core';

import { combineLatest } from 'rxjs';

import { PostFacade } from '../store/posts-facade';
import { PostInterface } from '../types/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  @Output() currentPageEvent = new EventEmitter<number>();

  @Input() postList: PostInterface[] | undefined | null = [];

  currentPage = 1

  constructor(private postFacade: PostFacade) {}

  data$ = combineLatest({
    posts: this.postFacade.posts$,
  });

  onScrollDown(): void {    
    this.currentPage++;
    this.currentPageEvent.emit(this.currentPage);
  }
}
