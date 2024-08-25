import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthFacade } from '../../../../core/layout/auth-layout/store/auth/auth-facade';
import { CurrentUserInterface } from '../../../../shared/types/current-user.interface';
import { filter, map, switchMap, tap } from 'rxjs';

import { PostFacade } from '../../../../shared/components/posts/store/posts-facade';
import { PostInterface } from '../../../../shared/components/posts/types/post.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authFacade: AuthFacade,
    private postFacade: PostFacade
  ) {}

  form = this.formBuilder.nonNullable.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    phonenumber: [''],
    notifications: ['', Validators.required],
  });

  currentUser?: CurrentUserInterface | null;
  posts: PostInterface[] = [];

  ngOnInit(): void {
    this.authFacade.currentUser$
      .pipe(
        filter(
          (currentUser) => currentUser !== null && currentUser !== undefined
        ),
        tap((currentUser) => {
          if (currentUser) {
            this.postFacade.fetchAllPostsByUserId(currentUser.id);
          }
        }),
        switchMap((currentUser) => {
          return this.postFacade.posts$.pipe(
            map((posts) => {
              return { posts, currentUser };
            })
          );
        })
      )
      .subscribe(({ currentUser, posts }) => {
        this.currentUser = currentUser;
        this.posts = posts || [];
        this.initializeForm();
      });
  }

  initializeForm(): void {
    if (!this.currentUser) {
      throw new Error('Current user is not set');
    }
    this.form.patchValue({
      firstname: this.currentUser.firstname,
      lastname: this.currentUser.lastname,
      phonenumber: this.currentUser.phonenumber,
      notifications: this.currentUser.notifications,
    });
  }

  onSubmit(): void {
    if (!this.currentUser) {
      throw new Error('current user is not set');
    }
    const currentUserRequest: CurrentUserInterface = {
      ...this.currentUser,
      ...this.form.getRawValue(),
    };
    this.authFacade.updateCurrentUser(currentUserRequest);
  }

  getHeaders(objectHeader: any): string[] {
    return Object.keys(objectHeader);
  }

  createPostsCsv(): string {
    let headersArray = this.getHeaders(this.posts[0]);
    let stringPosts = this.posts.map((post: PostInterface) => {
      const stringPostItem = headersArray
        .map((key) => {
          let stringRercord = '';
          if (key === 'author') {
            stringRercord = `${Object.keys(post.author)
              .map((key) => {
                return post.author[key as keyof typeof post.author];
              })
              .join('/')}`;
          } else if (key === 'tagList') {
            stringRercord = post.tagList
              .map((tag) => {
                return tag;
              })
              .join('/');
          } else {
            stringRercord = (
              post[key as keyof typeof post]?.toString() || ' '
            ).replace(',', ' ');
          }
          return stringRercord;
        })
        .join(',');

      return stringPostItem;
    });

    const headersString = headersArray.join(',');

    return [headersString, ...stringPosts].join('\n');
  }

  createUserInformationCsv(currentUser: CurrentUserInterface): string {
    let userHeaders = this.getHeaders(currentUser);
    let stringUserInformation = userHeaders
      .map((userKey) => {
        let stringValue = '';
        // Omiting friends since is another list of user information
        if (userKey !== 'friends' && userKey !== 'photos') {
          stringValue =
            currentUser[userKey as keyof typeof currentUser]?.toString() || '';
        } else if (userKey === 'photos') {
          stringValue = currentUser.photos.join('/');
        }
        return stringValue;
      })
      .join(',');

    return [
      // Omiting friends since is another list of user information
      userHeaders.filter((header) => header !== 'friends').join(','),
      stringUserInformation,
    ].join('\n');
  }

  createUserFriendsCsv(friends: Partial<CurrentUserInterface>[]): string {
    let friendsString = friends
      .map((friend) => {
        let friendKeys: string[] = [];
        let stringValues: string[] = [];
        let stringValue = '';
        Object.keys(friend).forEach((friendKey) => {
          if (
            typeof friend[friendKey as keyof typeof friend] !== 'object' &&
            friendKey !== 'friends' &&
            friendKey !== 'photos'
          ) {
            stringValue =
              friend[friendKey as keyof typeof friend]?.toString() || '';
          } else if (friendKey === 'photos') {
            stringValue = friend.photos?.join('/') || '';
          }

          friendKeys.push(friendKey);
          stringValues.push(stringValue);
        });

        return [friendKeys.join(','), stringValues.join(',')].join('\n');
      })
      .join('\n');
    return friendsString;
  }

  exportToCSV(): void {
    if (this.currentUser && this.posts.length) {
      const csvPost = this.createPostsCsv();
      const csvUserInformation = this.createUserInformationCsv(
        this.currentUser
      );
      const csvUserFriends = this.createUserFriendsCsv(
        this.currentUser.friends
      );
      const csvInformation = [
        'USER INFORMATION',
        csvUserInformation,
        'USER POSTS',
        csvPost,
        'USER FRIENDS',
        csvUserFriends,
      ].join('\n');
      const file = new File([csvInformation], 'UserInformationCsv.csv', {
        type: 'text/plain',
      });

      const url = URL.createObjectURL(file);

      // Create a hidden anchor link
      const element = document.createElement('a');
      element.style.display = 'none';
      element.href = url;
      element.download = file.name;
      // Append to DOM and simulate click (this will trigger the download)
      document.body.appendChild(element);
      element.click();
      // Cleanup
      document.body.removeChild(element);
      window.URL.revokeObjectURL(url);
    }
  }
}
