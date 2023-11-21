import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, filter } from 'rxjs';
import { FormControl } from '@angular/forms';
import { PostModel } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss'],
})
export class PostListPageComponent implements OnInit {
  public posts: PostModel[] = [];

  public searchInput = new FormControl();

  public hasMorePosts: boolean = false;

  public currentPage = 1;

  private debounceSubject = new Subject<string>();

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.initPosts();

    this.debounceSubject
      .pipe(
        filter((value) => !value.length || value.length >= 3),
        debounceTime(1000),
      )
      .subscribe(() => {
        this.initPosts();
      });

    this.searchInput.valueChanges.subscribe((value) => this.debounceSubject.next(value));
  }

  initPosts() {
    this.currentPage = 1;
    this.loadPosts();
  }

  loadPosts() {
    this.postService
      .getPosts(this.currentPage, this.searchInput.value)
      .subscribe(({ posts, hasMorePosts }) => {
        this.posts = this.currentPage > 1 ? this.posts.concat(posts) : posts;
        this.hasMorePosts = hasMorePosts;
      });
  }

  loadMorePosts() {
    this.currentPage += 1;
    this.loadPosts();
  }
}
