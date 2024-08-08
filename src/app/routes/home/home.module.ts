import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { StoryGalleryComponent } from './components/story-gallery/story-gallery.component';
import { PostComponent } from './components/post/post.component';
import { PostWriterComponent } from './components/post/post-writer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostListComponent } from './components/post/post-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    StoryGalleryComponent,
    PostComponent,
    PostWriterComponent,
    PostListComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
