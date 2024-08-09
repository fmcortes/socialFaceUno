import { BackendErrorsInterface } from "src/app/shared/types/backend-error.interface";
import { CountryInterface } from "./country.interface";

export interface CountriesStateInterface {
  isSubmiting: boolean;
  countries: CountryInterface[] | null | undefined;
  isLoading: boolean;
  validationErrors: BackendErrorsInterface | null;
}