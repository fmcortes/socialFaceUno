export interface RegisterRequestInterface {
  email: string | null;
  password: string | null;
  firstname: string;
  lastname: string;
  country: string;
  notification: string;
  image?: string | null;
  age?: number | null;
}
