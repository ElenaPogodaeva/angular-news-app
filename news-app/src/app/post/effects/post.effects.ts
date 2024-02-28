import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, concatLatestFrom } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { PostService } from '../services/post.service';
import { PostState, getPostState } from '../reducers/post.reducer';
import {
  appendPostsAction,
  loadMorePostsAction,
  loadPostsAction,
  setPostsAction,
} from '../actions/post.actions';

@Injectable()
export class PostEffects {
  constructor(
    private actions$: Actions,
    private store: Store,
    private postService: PostService,
  ) {}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPostsAction),
      switchMap(({ searchCriteria }) =>
        this.postService.getPosts(1, searchCriteria).pipe(
          map((posts) => setPostsAction({ payload: posts })),
          catchError(() => of(setPostsAction({ payload: null }))),
        ),
      ),
    );
  });

  loadMorePosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadMorePostsAction),
      concatLatestFrom(() =>
        this.store.select(getPostState).pipe(
          map((state: PostState) => ({
            page: state.currentPage,
            searchCriteria: state.searchCriteria,
          })),
        ),
      ),
      switchMap(([, { page, searchCriteria }]) =>
        this.postService.getPosts(page, searchCriteria).pipe(
          map((posts) => appendPostsAction({ payload: posts })),
          catchError(() => of(appendPostsAction({ payload: null }))),
        ),
      ),
    );
  });
}
