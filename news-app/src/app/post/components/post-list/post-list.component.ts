import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/post/models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  public posts?: PostModel[];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.posts;
  }

  likePost(targetPost: PostModel) {
    this.postService.likePost(targetPost);
  }

  unlikePost(targetPost: PostModel) {
    this.postService.unlikePost(targetPost);
  }

  handleLike(targetPost: PostModel) {
    this.postService.handleLike(targetPost);
  }
}
