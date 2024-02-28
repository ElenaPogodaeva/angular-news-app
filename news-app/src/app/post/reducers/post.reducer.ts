import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { PostModel } from '../models/post.model';
import {
  appendPostsAction,
  loadMorePostsAction,
  loadPostsAction,
  setPostsAction,
} from '../actions/post.actions';

export interface PostState {
  posts: PostModel[];
  hasMorePosts: boolean;
  searchCriteria: string;
  currentPage: number;
  isLoading: boolean;
}

export const initialState: PostState = {
  posts: [],
  hasMorePosts: false,
  searchCriteria: '',
  currentPage: 1,
  isLoading: false,
};

export const postReducer = createReducer(
  initialState,
  on(
    loadPostsAction,
    (state, { searchCriteria }): PostState => ({
      ...state,
      searchCriteria,
      currentPage: 1,
      isLoading: true,
    }),
  ),
  on(
    loadMorePostsAction,
    (state): PostState => ({
      ...state,
      currentPage: state.currentPage + 1,
      isLoading: true,
    }),
  ),
  on(setPostsAction, (state, action): PostState => {
    if (!action.payload) {
      return state;
    }

    return {
      ...state,
      posts: action.payload.posts,
      hasMorePosts: action.payload.hasMorePosts,
      isLoading: false,
    };
  }),
  on(appendPostsAction, (state, action): PostState => {
    if (!action.payload) {
      return state;
    }

    return {
      ...state,
      posts: state.posts.concat(action.payload.posts),
      hasMorePosts: action.payload.hasMorePosts,
      isLoading: false,
    };
  }),
);

export const getPostState = createFeatureSelector<PostState>('posts');
export const getPosts = createSelector(getPostState, (state: PostState) => state.posts);
export const getSearchCriteria = createSelector(
  getPostState,
  (state: PostState) => state.searchCriteria,
);
export const getHasMorePosts = createSelector(
  getPostState,
  (state: PostState) => state.hasMorePosts,
);
export const getIsLoading = createSelector(getPostState, (state: PostState) => state.isLoading);
