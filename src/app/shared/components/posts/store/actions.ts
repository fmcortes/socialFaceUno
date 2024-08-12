import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { PostInterface } from "../types/post.interface";
import { BackendErrorsInterface } from "src/app/shared/types/backend-error.interface";
import { PostRequestInterface } from "../types/post-request.interface";

export const postActions = createActionGroup({
  source: 'posts',
  events:{
    //'Get posts': props<{url: string}>(),
    'Get posts': props<{request: PostRequestInterface}>(),
    'Get posts success': props<{posts: PostInterface[]}>(),
    'Get posts failure': props<{errors: BackendErrorsInterface }>(),
  }
})