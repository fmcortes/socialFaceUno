export interface CurrentUserInterface {
  email: string;
  firstname: string;
  lastname: string;
  country: string;
  notifications: string;
  accesToken: string;
  username: string;
  id: number;
  image: string | null;
  friends: Partial<CurrentUserInterface>[];
  photos: string[];
  cover?: string;
  phonenumber?: string;
}
