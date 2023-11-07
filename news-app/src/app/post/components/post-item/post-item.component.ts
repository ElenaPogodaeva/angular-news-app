import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostModel } from 'src/app/post/models/post.model';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss'],
})
export class PostItemComponent implements OnInit {
  @Input() public post?: PostModel;

  @Output() public like: EventEmitter<PostModel> = new EventEmitter();

  constructor(
    private postService: PostService,
    private router: Router,
  ) {}

  onLike() {
    this.like.emit(this.post);
  }

  onSelect(targetPost: PostModel) {
    this.postService.selectPost(targetPost);
    this.router.navigate(['/', 'posts', targetPost.id]);
  }

  ngOnInit(): void {}
}
