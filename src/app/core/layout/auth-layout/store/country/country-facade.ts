import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { countriesActions } from './actions';
import { Observable } from 'rxjs';
import { selectCountries } from './reducer';
import { CountryInterface } from 'src/app/core/types/country.interface';

@Injectable()
export class CountriesFacade {
  constructor(private store: Store) {}

  get countries$(): Observable<CountryInterface[] | null | undefined> {
    return this.store.select(selectCountries);
  }

  fetchCountries() {
    this.store.dispatch(countriesActions.getCountries());
  }
}
