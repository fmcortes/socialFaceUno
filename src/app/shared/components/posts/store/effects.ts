import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '../../../services/posts.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { postActions } from './actions';
import { HttpErrorResponse } from '@angular/common/http';
import { PostInterface } from '../types/post.interface';

export const getPostEffect = createEffect(
  (actions$ = inject(Actions), postService = inject(PostService)) => {
    return actions$.pipe(
      ofType(postActions.getPosts),
      switchMap(({request}) => {
        const {author, global, page} = request
        return postService.getPosts(page, global, author).pipe(
          map((posts: PostInterface[]) => {
            return postActions.getPostsSuccess({ posts });
          }),
          catchError((errors: HttpErrorResponse) => {
            return of(postActions.getPostsFailure({ errors: errors.error }));
          })
        );
      })
    );
  },
  { functional: true }
);

export const getPostByUserIdEffect = createEffect(
  (actions$ = inject(Actions), postService = inject(PostService)) => {
    return actions$.pipe(
      ofType(postActions.getPostsByUserId),
      switchMap(({request}) => {
        const {userId,  page} = request
        return postService.getPostByUserId(page, userId).pipe(
          map((posts: PostInterface[]) => {
            return postActions.getPostsByUserIdSuccess({ posts });
          }),
          catchError((errors: HttpErrorResponse) => {
            return of(postActions.getPostsByUserIdFailure({ errors: errors.error }));
          })
        );
      })
    );
  },
  { functional: true }
);

export const getPostByTagdEffect = createEffect(
  (actions$ = inject(Actions), postService = inject(PostService)) => {
    return actions$.pipe(
      ofType(postActions.getPostsByTag),
      switchMap(({request}) => {
        const {tag,  page} = request
        return postService.getPostByTag(page, tag).pipe(
          map((posts: PostInterface[]) => {
            return postActions.getPostsByTagSuccess({ posts });
          }),
          catchError((errors: HttpErrorResponse) => {
            return of(postActions.getPostsByTagFailure({ errors: errors.error }));
          })
        );
      })
    );
  },
  { functional: true }
);

export const createPostEffect = createEffect(
  (actions$ = inject(Actions), postService = inject(PostService)) => {
    return actions$.pipe(
      ofType(postActions.createPosts),
      switchMap(({request}) => {        
        return postService.createPost(request).pipe(
          map((post: PostInterface) => {
            return postActions.createPostsSuccess({ post });
          }),
          catchError((errors: HttpErrorResponse) => {
            return of(postActions.createPostsFailure({ errors: errors.error }));
          })
        );
      })
    );
  },
  { functional: true }
);
