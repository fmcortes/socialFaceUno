import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { RouterModule, RouterState } from '@angular/router';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostComponent } from './components/posts/post-list/post.component';
import { PostWriterComponent } from './components/posts/post-writer/post-writer.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    ProfilePictureComponent,
    PostListComponent,
    PostComponent,
    PostWriterComponent,
    ErrorComponent,
  ],
  imports: [CommonModule, RouterModule, InfiniteScrollModule],
  exports: [
    ProfilePictureComponent,
    PostListComponent,
    PostComponent,
    PostWriterComponent,
    ErrorComponent,
  ],
  providers: [],
})
export class SharedModule {}
