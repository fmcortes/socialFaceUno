import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePictureComponent } from './components/profile-picture/profile-picture.component';
import { RouterModule, RouterState } from '@angular/router';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostItemComponent } from './components/posts/post-list/post-item.component';
import { PostWriterComponent } from './components/posts/post-writer/post-writer.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ErrorComponent } from './components/error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelComponent } from './components/panel/panel.component';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    ProfilePictureComponent,
    PostListComponent,
    PostItemComponent,
    PostWriterComponent,
    ErrorComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-3877699405191385',
    }),
  ],
  exports: [
    ProfilePictureComponent,
    PostListComponent,
    PostItemComponent,
    PostWriterComponent,
    ErrorComponent,
    PanelComponent,
  ],
  providers: [],
})
export class SharedModule {}
