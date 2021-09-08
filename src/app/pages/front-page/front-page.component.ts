import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post';
import { PostsActions } from 'src/app/store/posts/posts.actions';
import { PostsSelectors } from 'src/app/store/posts/posts.selectors';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
})
export class FrontPageComponent implements OnInit {
  public posts!: Post[];
  public isPostsLoaded!: boolean;

  constructor(private store$: Store) {}

  public ngOnInit(): void {
    this.getPosts();
  }

  public getPosts(): void {
    this.store$.select(PostsSelectors.getAllPosts).subscribe({
      next: (posts) => {
        if (posts.length === 0) {
          this.store$.dispatch(PostsActions.loadPosts());
          this.store$.select(PostsSelectors.getAllPosts).subscribe({
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
