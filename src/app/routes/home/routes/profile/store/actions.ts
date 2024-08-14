
import {createActionGroup, emptyProps, props} from '@ngrx/store'
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface'

export const userProfileActions = createActionGroup({
  source: 'User Profile',
  events: {
    'Get user profile': props<{id: number}>(),
    'Get user profile success': props<{userProfile: CurrentUserInterface}>(),
    'Get user profile failure': props<{errors: string}>(),
  },
})
