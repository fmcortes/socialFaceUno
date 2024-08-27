import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../types/tag.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class TagService {
  url = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getTags(): Observable<Tag[]> {
    return this.httpClient.get<Tag[]>(`${this.url}/tagList`);
  }
}
