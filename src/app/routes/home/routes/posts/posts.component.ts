import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest } from 'rxjs';
import { PostFacade } from 'src/app/shared/components/posts/store/posts-facade';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  currentPage = 0;
  slug: string = '';
  data$ = combineLatest({
    posts: this.postFacade.posts$,
  });

  constructor(private postFacade: PostFacade, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.slug = params['slug'];
      this.currentPage = 0;
      if (this.slug) {
        this.getPostData(this.slug, this.currentPage);
      }
    });
  }

  onCurrentPage() {
    if (this.slug) {
      this.currentPage++;

      this.getPostData(this.slug, this.currentPage);
    }
  }

  getPostData(tag: string, page: number) {
    this.postFacade.fetchPostsByTag(page, tag);
  }
}
