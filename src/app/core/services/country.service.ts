import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryInterface } from '../types/country.interface';

@Injectable()
export class CountryService {
  constructor(private httpClient: HttpClient) {}
  getCountries(): Observable<CountryInterface[]> {
    return this.httpClient.get<any>('https://fakefaceapi.onrender.com/countries');
  }
}
