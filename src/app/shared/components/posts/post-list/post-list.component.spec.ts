import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';
import { PostFacade } from '../store/posts-facade';
import { of } from 'rxjs';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async () => {

    const mockPostFacade: Partial<PostFacade> = {
      posts$: of(),
    };
  

    await TestBed.configureTestingModule({
      declarations: [ PostListComponent ],
      providers: [{provide: PostFacade, useValue: mockPostFacade}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
