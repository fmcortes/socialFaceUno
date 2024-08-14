import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { PostInterface } from '../components/posts/types/post.interface';
import { imagesArray } from '../utils/fakeImageObjects';

@Injectable()
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getPosts(
    page: number = 1,
    global: boolean = true,
    author: string = ''
  ): Observable<PostInterface[]> {
    const url = `https://fakefaceapi.onrender.com/posts?_page=${page}${
      global ? `&author.username_ne=${author}` : `&author.username=${author}`
    }`;
    return this.httpClient.get<PostInterface[]>(url).pipe(
      map((posts) => {
        return posts.map((post) => {
          const index = this.getRandomNumber(10, 0);
          post.image = imagesArray[index];
          return post;
        });
      })
    );
  }

  getPostByUserId(page: number, userId: number): Observable<PostInterface[]> {
    const url = `https://fakefaceapi.onrender.com/posts?_page=${page}&author.id=${userId}`;
    return this.httpClient.get<PostInterface[]>(url).pipe(
      map((posts) => {
        return posts.map((post) => {
          const index = this.getRandomNumber(10, 0);
          post.image = imagesArray[index];
          return post;
        });
      })
    );
  }

  createPost(post: PostInterface): Observable<PostInterface> {
    const url = `https://fakefaceapi.onrender.com/posts`;
    return this.httpClient.post<PostInterface>(url, post);
  }
}
