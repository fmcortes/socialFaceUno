import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { ProfileInterface } from './profile.interface';
import { TagType } from './tags-type';

export interface PostInterface {
  body: string;
  createdAt: string;
  description: string;
  favorited: boolean;
  favoritesCount: number;
  slug: string;
  tagList: TagType[];
  title: string;
  updatedAt: string;
  author: Partial<CurrentUserInterface>;
  image: string;
  userId?: number;
  id?: number;
}
