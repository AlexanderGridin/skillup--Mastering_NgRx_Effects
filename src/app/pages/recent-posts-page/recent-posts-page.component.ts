import { Component, OnInit } from '@angular/core';
import { PostsActions } from 'src/app/store/posts/posts.actions';
import { PostsSelectors } from 'src/app/store/posts/posts.selectors';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-recent-posts-page',
  templateUrl: './recent-posts-page.component.html',
  styleUrls: ['./recent-posts-page.component.css'],
})
export class RecentPostsPageComponent implements OnInit {
  public posts!: Post[];
  public isPostsLoaded!: boolean;

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.getRecentPosts();
  }

  public getRecentPosts(): void {
    this.store$.select(PostsSelectors.getRecentPosts).subscribe({
      next: (posts) => {
        if (posts.length === 0) {
          this.store$.dispatch(PostsActions.loadPosts());
          this.store$.select(PostsSelectors.getRecentPosts).subscribe({
            next: (posts) => (this.posts = posts),
          });
        }

        if (posts.length > 0) {
          this.posts = posts;
        }
      },
    });

    this.store$.select(PostsSelectors.getLoaderStatus).subscribe({
      next: (isPostsLoaded) => (this.isPostsLoaded = isPostsLoaded),
    });
  }
}
