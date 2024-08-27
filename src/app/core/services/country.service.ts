import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryInterface } from '../types/country.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class CountryService {

  url = environment.apiUrl

  constructor(private httpClient: HttpClient) {}
  getCountries(): Observable<CountryInterface[]> {
    return this.httpClient.get<any>(`${this.url}/countries`);
  }
}
