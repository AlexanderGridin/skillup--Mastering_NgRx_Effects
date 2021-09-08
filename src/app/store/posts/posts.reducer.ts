import { Action, createReducer, on } from '@ngrx/store';

import { Post } from 'src/app/interfaces/post';
import { PostsState } from 'src/app/interfaces/posts-state';

import { PostsActions } from './posts.actions';

const initialState: PostsState = {
  posts: [],
  isPostsLoaded: false,
};

const _postsReducer = createReducer(
  initialState,
  on(PostsActions.loadPosts, (state: PostsState): PostsState => {
    return {
      ...state,
      isPostsLoaded: false,
    };
  }),

  on(
    PostsActions.loadPostsSuccess,
    (state: PostsState, { posts }: { posts: Post[] }): PostsState => {
      return {
        ...state,
        posts,
        isPostsLoaded: true,
      };
    }
  ),
  on(
    PostsActions.savePostsInStore,
    (state: PostsState, { posts }: { posts: Post[] }): PostsState => {
      return {
        ...state,
        posts,
      };
    }
  )
);

export const postsReducer = (state: PostsState | undefined, action: Action) => {
  return _postsReducer(state, action);
};
