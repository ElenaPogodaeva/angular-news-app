import { Component, OnInit } from '@angular/core';
import { responseMock } from 'src/app/mocks/response.mock';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  public posts: PostModel[] = responseMock;

  likePost(targetPost: PostModel) {
    const postIdx = this.posts.findIndex((post) => post.id === targetPost.id);
    this.posts[postIdx].isLiked = true;
    this.posts[postIdx].likes += 1;
  }

  unlikePost(targetPost: PostModel) {
    const postIdx = this.posts.findIndex((post) => post.id === targetPost.id);
    this.posts[postIdx].isLiked = false;
    this.posts[postIdx].likes -= 1;
  }

  handleLike(targetPost: PostModel) {
    targetPost.isLiked ? this.unlikePost(targetPost) : this.likePost(targetPost);
  }

  constructor() {}

  ngOnInit(): void {}
}
