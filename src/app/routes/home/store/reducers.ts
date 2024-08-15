import {createFeature, createReducer, on} from '@ngrx/store'
import {tagsActions} from './actions';
import {TagType} from '../../../shared/components/posts/types/tags-type'
import { TagsStateInterface } from '../types/tag-state.interface';

const initialState: TagsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

export const tagsFeature = createFeature({
  name: 'tags',
  reducer: createReducer(
    initialState,
    on(tagsActions.getTags, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(tagsActions.getTagsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.tags,
    })),
    on(tagsActions.getTagsFailure, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.error
    }))
  ),
})

export const {
  name: tagsFeatureKey,
  reducer: tagsReducer,
  selectIsLoading,
  selectError,
  selectData: selectTagsData,
} = tagsFeature
