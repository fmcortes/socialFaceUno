import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BackendErrorsInterface } from '../../types/backend-error.interface';

@Component({
  selector: 'app-error',
  templateUrl: 'error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input()
  backendErrors: string = '';

  
  @Output() clearErrors = new EventEmitter();

  constructor() {}

  onClose(): void {
    this.clearErrors.emit();
  }
}
