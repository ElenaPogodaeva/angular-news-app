import { createAction, props } from '@ngrx/store';
import { PostResponseModel } from '../models/post.model';

export const loadPostsAction = createAction(
  '[Post] Load Posts',
  props<{ searchCriteria: string }>(),
);
export const loadMorePostsAction = createAction('[Post] Load More Posts');
export const setPostsAction = createAction(
  '[Post] Set Posts',
  props<{ payload: PostResponseModel | null }>(),
);
export const appendPostsAction = createAction(
  '[Post] Append Posts',
  props<{ payload: PostResponseModel | null }>(),
);
