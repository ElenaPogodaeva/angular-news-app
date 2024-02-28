import { Component, Input } from '@angular/core';
import { PostModel } from 'src/app/post/models/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent {
  @Input() public post?: PostModel;
}
