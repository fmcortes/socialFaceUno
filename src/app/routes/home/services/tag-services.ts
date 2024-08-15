import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {TagType} from '../../../shared/components/posts/types/tags-type'
import { Tag } from '../types/tag.interface';

@Injectable()
export class TagService {
  constructor(private httpClient: HttpClient) {}

  getTags(): Observable<Tag[]> {
    const url = 'https://fakefaceapi.onrender.com/tagList';
    return this.httpClient.get<Tag[]>(url);
  }
}
