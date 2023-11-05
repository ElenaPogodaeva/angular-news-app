import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostModel } from 'src/app/post/models/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  @Input() public post?: PostModel;

  @Output() public like: EventEmitter<PostModel> = new EventEmitter();

  constructor() {}

  onLike() {
    this.like.emit(this.post);
  }

  ngOnInit(): void {}
}
