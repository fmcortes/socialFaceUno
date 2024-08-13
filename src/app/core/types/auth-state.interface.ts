import { BackendErrorsInterface } from 'src/app/shared/types/backend-error.interface';
import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

export interface AuthStateInterface {
  isSubmiting: boolean;
  currentUser: CurrentUserInterface | null | undefined;
  isLoading: boolean;
  validationErrors: string | null;
}
