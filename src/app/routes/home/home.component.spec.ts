import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { AuthFacade } from '../../core/layout/auth-layout/store/auth/auth-facade';

import { PostFacade } from '../../shared/components/posts/store/posts-facade';
import { of } from 'rxjs';
import { TagsFacade } from './store/tag-facade';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const mockAuthFacade: Partial<AuthFacade> = {
    logOut: () => {},
  };

  const mockPostFacade: Partial<PostFacade> = {
    posts$: of(),
    fetchPosts: () => {},
  };

  const mockTagsFacade: Partial<TagsFacade> = {
    tags$: of(),
    fetchTags: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: AuthFacade, useValue: mockAuthFacade },
        { provide: PostFacade, useValue: mockPostFacade },
        { provide: TagsFacade, useValue: mockTagsFacade },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
