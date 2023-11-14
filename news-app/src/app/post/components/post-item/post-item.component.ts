import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from 'src/app/post/models/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  @Input() public post?: PostModel;

  ngOnInit(): void {}
}
