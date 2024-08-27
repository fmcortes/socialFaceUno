import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { AuthFacade } from "../../../../core/layout/auth-layout/store/auth/auth-facade";
import { PostFacade } from "../../../../shared/components/posts/store/posts-facade";
import { ProfileFacade } from './store/profile-facade';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { CommonModule } from '@angular/common';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  const mockAuthFacade: Partial<AuthFacade> = {
    currentUser$: of(),
  };

  const mockPostFacade: Partial<PostFacade> = {
    posts$: of(),
  };

  const mockProfileFacade: Partial<ProfileFacade> = {
    userProfile$: of(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [CommonModule, ProfileRoutingModule, SharedModule],
      providers: [
        { provide: AuthFacade, useValue: mockAuthFacade },
        { provide: PostFacade, useValue: mockPostFacade },
        { provide: ProfileFacade, useValue: mockProfileFacade },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
