import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostsState } from 'src/app/interfaces/posts-state';
import { Post } from 'src/app/interfaces/post';

export namespace PostsSelectors {
  export const state = createFeatureSelector<PostsState>('posts');

  export const getAllPosts = createSelector(
    state,
    (state: PostsState): Post[] => state.posts
  );
}
