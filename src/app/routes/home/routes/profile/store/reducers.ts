import { createFeature, createReducer, on } from "@ngrx/store"
import { UserProfileStateInterface } from "../types/user-profile-state.interface"
import { userProfileActions } from "./actions"
import { routerNavigationAction } from "@ngrx/router-store"

const initialState: UserProfileStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

export const userProfileFeature = createFeature({
  name: 'userProfile',
  reducer: createReducer(
    initialState,
    on(userProfileActions.getUserProfile, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(userProfileActions.getUserProfileSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    })),
    on(userProfileActions.getUserProfileFailure, (state, actions) => ({
      ...state,
      isLoading: false,
      error: actions.errors
    })),
    on(routerNavigationAction, () => initialState)
  ),
})

export const {
  name: userProfileFeatureKey,
  reducer: userProfileReducer,
  selectIsLoading,
  selectError,
  selectData: selectUserProfileData,
} = userProfileFeature