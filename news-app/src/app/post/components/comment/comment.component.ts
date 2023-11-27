import { Component, Input, OnInit } from '@angular/core';
import { CommentModel } from '../../models/post.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() public comment?: CommentModel;

  constructor() {}

  ngOnInit(): void {}
}