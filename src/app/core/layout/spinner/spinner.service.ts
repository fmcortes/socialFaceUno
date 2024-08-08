import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SpinnerService {
  isLoading$ = new Subject<boolean>();
  constructor() {}

  showSpinner(): void {
    this.isLoading$.next(true);
  }
  hideSpinner(): void {
    this.isLoading$.next(false);
  }
}
