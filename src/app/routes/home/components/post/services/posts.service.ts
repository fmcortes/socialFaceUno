import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PostInterface } from '../types/post.interface';

@Injectable()
export class PostService {
  imagesArray: string[] = [
    '/assets/images/feed-image-1.png',
    '/assets/images/feed-image-2.png',
    '/assets/images/feed-image-3.png',
    '/assets/images/feed-image-4.png',
    'assets/images/feed-image-5.png',
    '/assets/images/feed-image-6.png',
    '/assets/images/feed-image-7.png',
    '/assets/images/feed-image-8.png',
    '/assets/images/feed-image-9.png',
    '/assets/images/feed-image-10.png',
    '/assets/images/feed-image-11.png',
  ];

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
      global ? `&author.username_ne=${author}` : `&author=${author}`
    }`;
    return this.httpClient.get<PostInterface[]>(url).pipe(
      map((posts) => {
        return posts.map((post) => {
          const index = this.getRandomNumber(10, 0);
          post.image = this.imagesArray[index];
          return post;
        });
      })
    );
  }
}
