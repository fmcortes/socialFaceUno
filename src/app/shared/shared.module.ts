import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { RouterModule, RouterState } from '@angular/router';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostComponent } from './components/posts/post-list/post.component';
import { PostWriterComponent } from './components/posts/post-writer/post-writer.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@NgModule({
  declarations: [
    ProfilePictureComponent,
    PostListComponent,
    PostComponent,
    PostWriterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule,
  ],
  exports:[
    ProfilePictureComponent,
    PostListComponent,
    PostComponent,
    PostWriterComponent
  ],
  providers: [


  ]
})
export class SharedModule { }
