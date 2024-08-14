import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserProfileService } from '../services.ts/user-profile.service';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { userProfileActions } from './actions';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import {
  coverPhotosArray,
  profileImagesArray,
  userPhotosArray,
} from 'src/app/shared/utils/fakeImageObjects';

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getUserProfileEffect = createEffect(
  (
    actions$ = inject(Actions),
    userProfileService = inject(UserProfileService)
  ) => {
    return actions$.pipe(
      ofType(userProfileActions.getUserProfile),
      switchMap(({ id }) => {
        return userProfileService.getUserProfileById(id).pipe(
          map((userProfile: CurrentUserInterface) => {
            userProfile.photos = [...userPhotosArray];
            userProfile.cover = coverPhotosArray[getRandomNumber(0, 7)];
            
            // Generate fake images for friends
            userProfile.friends?.forEach((friend) => {
              if (!friend.image) {
                friend.image = profileImagesArray[getRandomNumber(0, 10)];
              }
            });

            // Add fake profile photo
            if (!userProfile.image) {
              userProfile.image = profileImagesArray[getRandomNumber(0, 10)];
            }

            return userProfileActions.getUserProfileSuccess({ userProfile });
          }),
          catchError((errors: HttpErrorResponse) => {
            return of(
              userProfileActions.getUserProfileFailure({ errors: errors.error })
            );
          })
        );
      })
    );
  },
  { functional: true }
);
