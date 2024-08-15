import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { tagsActions } from './actions';
import { Observable } from 'rxjs';

import { selectTagsData } from './reducers';
import { Tag } from '../types/tag.interface';

@Injectable()
export class TagsFacade {
  constructor(private store: Store) {}

  get tags$(): Observable<Tag[] | null> {
    return this.store.select(selectTagsData);
  }

  fetchTags() {
    this.store.dispatch(tagsActions.getTags());
  }
}
