import { Component, Input } from '@angular/core';
import { PostInterface } from '../types/post.interface'

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent {
  @Input() post?: PostInterface;
  @Input() position = 0
}
