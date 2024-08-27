import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsComponent } from './settings.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthFacade } from '../../../../core/layout/auth-layout/store/auth/auth-facade';

import { PostFacade } from '../../../../shared/components/posts/store/posts-facade';
import { of } from 'rxjs';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  const mockAuthFacade: Partial<AuthFacade> = {
    currentUser$: of(),
    updateCurrentUser: () => {},
  };

  const mockPostFacade: Partial<PostFacade> = {
    fetchAllPostsByUserId: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [SettingsComponent],
      providers: [
        { provide: AuthFacade, useValue: mockAuthFacade },
        { provide: PostFacade, useValue: mockPostFacade },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
