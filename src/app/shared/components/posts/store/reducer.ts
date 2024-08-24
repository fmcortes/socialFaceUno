import { createFeature, createReducer, on } from '@ngrx/store';
import { postActions } from './actions';
import { routerNavigatedAction } from '@ngrx/router-store';
import { PostsStateInterface } from '../types/posts-state.interface';

const initialState: PostsStateInterface = {
  isLoading: false,
  error: null,
  data: [],
};

export const postFeature = createFeature({
  name: 'post',
  reducer: createReducer(
    initialState,
    on(postActions.getPosts, (state) => ({ ...state, isLoading: true })),
    on(postActions.getPostsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: [...state.data, ...action.posts],
    })),
    on(postActions.getPostsFailure, (state, action) => ({
      ...state,
      isLoading: false,
      data: [],
      error: action.errors,
    })),
    on(postActions.getPostsByUserId, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(postActions.getPostsByUserIdSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.currentPage > 0 ? [...state.data, ...action.posts]: [...action.posts],
    })),
    on(postActions.getPostsByUserIdFailure, (state, action) => ({
      ...state,
      isLoading: false,
      data: [],
      error: action.errors,
    })),
    on(postActions.getPostsByTag, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(postActions.getPostsByTagSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: [...state.data, ...action.posts],
    })),
    on(postActions.getPostsByTagFailure, (state, action) => ({
      ...state,
      isLoading: false,
      data: [],
      error: action.errors,
    })),
    on(postActions.createPosts, (state) => ({ ...state, isLoading: true })),
    on(postActions.createPostsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: [action.post, ...state.data],
    })),
    on(postActions.createPostsFailure, (state, action) => ({
      ...state,
      isLoading: false,
      data: [],
      error: action.errors,
    })),
    on(routerNavigatedAction, () => initialState)
  ),
});

export const {
  name: postFeatureKey,
  reducer: postReducer,
  selectIsLoading,
  selectData: selectPostData,
  selectError,
} = postFeature;
