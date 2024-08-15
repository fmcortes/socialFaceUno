import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { postActions } from './actions';
import { filter, Observable } from 'rxjs';

import { selectPostData } from './reducer';
import { selectCurrentUser } from 'src/app/core/layout/auth-layout/store/auth/reducer';
import { PostInterface } from '../types/post.interface';
import { PostRequestInterface } from '../types/post-request.interface';

@Injectable()
export class PostFacade {
  constructor(private store: Store) {}

  currentUser = this.store.select(selectCurrentUser);

  get posts$(): Observable<PostInterface[] | null | undefined> {
    return this.store.select(selectPostData);
  }

  fetchPosts(currentPage: number, global: boolean) {
    this.currentUser
      .pipe(filter((user) => user !== null && user !== undefined))
      .subscribe((user) => {
        if (user) {
          const postRequest: PostRequestInterface = {
            page: currentPage,
            global,
            author: `${user.firstname} ${user.lastname}`,
          };
          this.store.dispatch(postActions.getPosts({ request: postRequest }));
        }
      });
  }

  fetchPostsByUserId(page: number, userId: number) {
    this.store.dispatch(
      postActions.getPostsByUserId({ request: { userId, page } })
    );
  }

  fetchPostsByTag(page: number, tag: string) {
    this.store.dispatch(
      postActions.getPostsByTag({ request: { tag, page } })
    );
  }

  createPost(post: PostInterface) {
    this.store.dispatch(postActions.createPosts({request: post}))
  }

}
