import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() public post?: PostModel;

  @Output() public like: EventEmitter<PostModel> = new EventEmitter();

  onLike() {
    this.like.emit(this.post);
  }

  constructor() {}

  ngOnInit(): void {}
}
