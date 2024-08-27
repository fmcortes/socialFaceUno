import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

export interface AuthReponseInterface {
  user: CurrentUserInterface;
  accessToken: string;
}
