import { Post } from './post';

export interface PostsState {
  posts: Post[];
  isPostsLoaded: boolean;
}
