import { BackendErrorsInterface } from "src/app/shared/types/backend-error.interface"
import { PostInterface } from "./post.interface"

export interface PostsStateInterface {
  isLoading: boolean
  error: string | null
  data: PostInterface[] | []
}