import { Injectable } from '@angular/core';
import { PostModel } from '../models/post.model';
import { responseMock } from '../mocks/response.mock';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public posts: PostModel[] = responseMock;

  public selectedPost?: PostModel;

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

  selectPost(targetPost: PostModel) {
    this.selectedPost = targetPost;
  }

  constructor() {}
}
