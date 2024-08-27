import { Component } from '@angular/core';
import { AuthFacade } from '../../../../core/layout/auth-layout/store/auth/auth-facade';

import { CurrentUserInterface } from '../../../../shared/types/current-user.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { PostInterface } from '../types/post.interface';
import { PostFacade } from '../store/posts-facade';

@Component({
  selector: 'app-post-writer',
  templateUrl: './post-writer.component.html',
  styleUrls: ['./post-writer.component.scss'],
})
export class PostWriterComponent {
  profileUser: Partial<CurrentUserInterface> | null = null;

  constructor(
    private authFacade: AuthFacade,
    private formBuilder: FormBuilder,
    private postFacade: PostFacade
  ) {
    this.authFacade.currentUser$.subscribe((currentUser) => {
      if (currentUser) {
        this.profileUser = {
          id: currentUser.id,
          username: `${currentUser.firstname} ${currentUser.lastname}`,
          image: currentUser.image || '',
        };
      }
    });
  }
  form = this.formBuilder.nonNullable.group({
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  onSubmit(): void {
    const request: PostInterface = {
      ...this.form.getRawValue(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      description: this.form.getRawValue().title,
      author: {
        ...this.profileUser,
      },
      favorited: false,
      image: '',
      tagList: [],
      slug: this.form.getRawValue().title,
      favoritesCount: 0,
      userId: this.profileUser?.id,
    };
    this.postFacade.createPost(request);
  }
}
