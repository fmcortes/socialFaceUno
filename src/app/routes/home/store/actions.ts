import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Tag } from '../types/tag.interface';

export const tagsActions = createActionGroup({
  source: 'tags',
  events: {
    'Get  tags': emptyProps(),
    'Get  tags success': props<{ tags: Tag[] }>(),
    'Get  tags failure': props<{ error: string }>(),
  },
});
