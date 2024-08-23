import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PostInterface } from '../types/post.interface';
import { combineLatest } from 'rxjs';
import { PostFacade } from '../store/posts-facade';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  @Input() postTitle = '';

  isLoading = false;

  data$ = combineLatest({
    isLoading: this.postFacade.isLoadingPost$,
  });
  constructor(private postFacade: PostFacade) {
    this.data$.subscribe((data) => {
      this.isLoading = data.isLoading;
    });
  }

  @Output() currentPageEvent = new EventEmitter<void>();

  @Input() postList: PostInterface[] | undefined | null = [];

  onScrollDown(): void {
    this.currentPageEvent.emit();
  }
}
