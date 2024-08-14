import { CurrentUserInterface } from "src/app/shared/types/current-user.interface"


export interface UserProfileStateInterface {
  data: CurrentUserInterface | null
  isLoading: boolean
  error: string | null
}
