import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostsState } from 'src/app/interfaces/posts-state';
import { Post } from 'src/app/interfaces/post';

export namespace PostsSelectors {
  export const state = createFeatureSelector<PostsState>('posts');

  export const getAllPosts = createSelector(
    state,
    (state: PostsState): Post[] => state.posts
  );

  export const getLoaderStatus = createSelector(
    state,
    (state: PostsState): boolean => state.isPostsLoaded
  );

  export const getRecentPosts = createSelector(
    state,
    (state: PostsState): Post[] => {
      const postsFromState: Post[] = [...state.posts];

      if (postsFromState.length > 0) {
        return postsFromState.slice(0, 3);
      }

      return state.posts;
    }
  );
}
