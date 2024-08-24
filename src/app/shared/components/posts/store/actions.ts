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
    'Get posts failure': props<{errors: string }>(),

    'Get posts by user id': props<{request: {userId: number, page: number}}>(),
    'Get posts by user id success': props<{posts: PostInterface[], currentPage: number}>(),
    'Get posts  by user id failure': props<{errors: string }>(),

    'Get posts by tag': props<{request: {tag: string, page: number}}>(),
    'Get posts by tag success': props<{posts: PostInterface[]}>(),
    'Get posts  by tag failure': props<{errors: string }>(),

    'Create posts': props<{request: PostInterface}>(),
    'Create posts success': props<{post: PostInterface}>(),
    'Create posts failure': props<{errors: string }>(),

  }
})