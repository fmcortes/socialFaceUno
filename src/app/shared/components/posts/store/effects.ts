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
