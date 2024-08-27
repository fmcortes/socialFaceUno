import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWriterComponent } from './post-writer.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthFacade } from '../../../../core/layout/auth-layout/store/auth/auth-facade';
import { of } from 'rxjs';
import { PostFacade } from '../store/posts-facade';

describe('PostWriterComponent', () => {
  let component: PostWriterComponent;
  let fixture: ComponentFixture<PostWriterComponent>;

  const mockAuthFacade: Partial<AuthFacade> = {
    currentUser$: of(),
  };

  const mockPostFacade: Partial<PostFacade> = {
    createPost: () => {},
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [PostWriterComponent],
      providers: [
        { provide: AuthFacade, useValue: mockAuthFacade },
        { provide: PostFacade, useValue: mockPostFacade },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
