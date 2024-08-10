import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StoryGalleryComponent } from './components/story-gallery/story-gallery.component';
import { PostComponent } from './components/post/post.component';
import { PostWriterComponent } from './components/post/post-writer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostListComponent } from './components/post/post-list.component';
import { PostService } from './components/post/services/posts.service';
import { StoreModule } from '@ngrx/store';
import { postFeature } from './components/post/store/reducer';
import { EffectsModule } from '@ngrx/effects';

import * as postEffects from './components/post/store/effects';
import { PostFacade } from './components/post/store/posts-facade';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    HomeComponent,
    StoryGalleryComponent,
    PostComponent,
    PostWriterComponent,
    PostListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature(postFeature),
    EffectsModule.forFeature([postEffects]),
    InfiniteScrollModule
  ],
  providers: [PostService, PostFacade],
})
export class HomeModule {}
