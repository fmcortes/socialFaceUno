import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PostInterface } from '../types/post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  @Output() currentPageEvent = new EventEmitter<void>();

  @Input() postList: PostInterface[] | undefined | null = [];

  onScrollDown(): void {
    this.currentPageEvent.emit();
  }
}
