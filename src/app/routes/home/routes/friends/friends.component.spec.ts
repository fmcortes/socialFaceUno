import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsComponent } from './friends.component';
import { AuthFacade } from '../../../../core/layout/auth-layout/store/auth/auth-facade';
import { PostFacade } from '../../../../shared/components/posts/store/posts-facade';
import { of } from 'rxjs';
import { ProfileFacade } from '../profile/store/profile-facade';

describe('FriendsComponent', () => {
  let component: FriendsComponent;
  let fixture: ComponentFixture<FriendsComponent>;

  beforeEach(async () => {
    const mockAuthFacade: Partial<AuthFacade> = {
      currentUser$: of(),
    };

    const mockPostFacade: Partial<PostFacade> = {
      posts$: of(),
    };

    const mockProfileFacade: Partial<ProfileFacade> = {
      userProfile$: of(),
    };

    await TestBed.configureTestingModule({
      declarations: [FriendsComponent],
      providers: [
        { provide: AuthFacade, useValue: mockAuthFacade },
        { provide: PostFacade, useValue: mockPostFacade },
        { provide: ProfileFacade, useValue: mockProfileFacade },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
