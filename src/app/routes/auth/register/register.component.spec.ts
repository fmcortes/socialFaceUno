import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFacade } from '../../../core/layout/auth-layout/store/auth/auth-facade';
import { CountriesFacade } from '../../../core/layout/auth-layout/store/country/country-facade';
import { of } from 'rxjs';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  const mockAuthFacade: Partial<AuthFacade> = {
    error$: of(),
  };

  const mockCountriesFacade: Partial<CountriesFacade> = {
    countries$: of(),
    fetchCountries: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [RegisterComponent],
      providers: [
        { provide: AuthFacade, useValue: mockAuthFacade },
        { provide: CountriesFacade, useValue: mockCountriesFacade },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
