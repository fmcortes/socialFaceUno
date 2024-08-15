import { Tag } from "./tag.interface"

export interface TagsStateInterface {
  isLoading: boolean
  error: string | null
  data: Tag[] | null
}
