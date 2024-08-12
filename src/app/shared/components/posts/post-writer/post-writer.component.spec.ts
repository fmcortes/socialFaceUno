import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostWriterComponent } from './post-writer.component';

describe('PostWriterComponent', () => {
  let component: PostWriterComponent;
  let fixture: ComponentFixture<PostWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostWriterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
