import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthHeaderComponent } from './auth-header.component';
import {  RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthHeaderComponent', () => {
  let component: AuthHeaderComponent;
  let fixture: ComponentFixture<AuthHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthHeaderComponent ],
      imports:[RouterTestingModule,]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
