import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from './spinner.service';
import { of } from 'rxjs';


import { PostFacade } from "../../../shared/components/posts/store/posts-facade";
import { ProfileFacade } from '../../../routes/home/routes/profile/store/profile-facade';




describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  const mockPostFacade: Partial<PostFacade> = {
    posts$: of(),
  };

  const mockProfileFacade: Partial<ProfileFacade> = {
    userProfile$: of(),
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerComponent ],
      providers: [SpinnerService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
