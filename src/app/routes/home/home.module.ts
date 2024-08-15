import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StoryGalleryComponent } from './components/story-gallery/story-gallery.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { PostListComponent } from '../../shared/components/posts/post-list/post-list.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as postEffects from '../../shared/components/posts/store/effects';
import * as tagsEffects from './store/effects';

import { PostFacade } from '../../shared/components/posts/store/posts-facade';
import { postFeature } from '../../shared/components/posts/store/reducer';
import { PostService } from '../../shared/services/posts.service';
import { TagService } from './services/tag-services';
import { tagsFeature } from './store/reducers';
import { TagsFacade } from './store/tag-facade';

@NgModule({
  declarations: [HomeComponent, StoryGalleryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature(postFeature),
    StoreModule.forFeature(tagsFeature),
    EffectsModule.forFeature([postEffects, tagsEffects]),

  ],
  providers: [PostService, TagService, PostFacade, TagsFacade],
})
export class HomeModule {}
