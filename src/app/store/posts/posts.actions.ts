import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post';

export namespace PostsActions {
  export const loadPosts = createAction('LOAD_POSTS');

  export const loadPostsSuccess = createAction(
    'LOAD_POSTS_SUCCESS',
    props<{ posts: Post[] }>()
  );

  export const savePostsInStore = createAction(
    'SAVE_POSTS_IN_STORE',
    props<{ posts: Post[] }>()
  );
}
