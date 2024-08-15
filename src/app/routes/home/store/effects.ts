import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';

import { tagsActions } from './actions';
import { TagService } from '../services/tag-services';


import { HttpErrorResponse } from '@angular/common/http';
import { Tag } from '../types/tag.interface';

export const getPopularTagsEffect = createEffect(
  (actions$ = inject(Actions), popularTagsService = inject(TagService)) => {
    return actions$.pipe(
      ofType(tagsActions.getTags),
      switchMap(() => {
        return popularTagsService.getTags().pipe(
          map((tags: Tag[]) => {
            return tagsActions.getTagsSuccess({ tags });
          }),
          catchError((error: HttpErrorResponse) => {
            return of(tagsActions.getTagsFailure(error.error));
          })
        );
      })
    );
  },
  { functional: true }
);
