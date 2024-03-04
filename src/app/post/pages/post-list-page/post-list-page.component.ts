import { Component, OnInit } from '@angular/core';
import { Subject, debounceTime, filter } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { getHasMorePosts, getPosts } from '../../reducers/post.reducer';
import { loadMorePostsAction, loadPostsAction } from '../../actions/post.actions';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.scss'],
})
export class PostListPageComponent implements OnInit {
  public posts$ = this.store.select(getPosts);

  public hasMorePosts$ = this.store.select(getHasMorePosts);

  public searchInput = new FormControl();

  private debounceSubject = new Subject<string>();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadPosts();

    this.debounceSubject
      .pipe(
        filter((value) => !value.length || value.length >= 3),
        debounceTime(1000),
      )
      .subscribe(() => {
        this.loadPosts();
      });

    this.searchInput.valueChanges.subscribe((value) => this.debounceSubject.next(value));
  }

  loadPosts() {
    this.store.dispatch(loadPostsAction({ searchCriteria: this.searchInput.value }));
  }

  loadMorePosts() {
    this.store.dispatch(loadMorePostsAction());
  }
}
