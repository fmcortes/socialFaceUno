import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';

import { PostFacade } from '../../../../shared/components/posts/store/posts-facade';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  const mockPostFacade: Partial<PostFacade> = {
    posts$: of(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PostsComponent],
      providers: [{ provide: PostFacade, useValue: mockPostFacade }],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
