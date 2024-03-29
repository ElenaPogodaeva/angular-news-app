import { Component, Input } from '@angular/core';
import { CommentModel } from '../../models/post.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input() public comment?: CommentModel;
}
