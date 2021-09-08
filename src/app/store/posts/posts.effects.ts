import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsActions } from './posts.actions';
import { map, mergeMap } from 'rxjs/operators';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder/json-placeholder.service';

@Injectable()
export class PostsEffects {
  public loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      mergeMap(() =>
        this.jsonPlaceholderService
          .getPostsFromApi()
          .pipe(map((posts) => PostsActions.loadPostsSuccess({ posts })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private jsonPlaceholderService: JsonPlaceholderService
  ) {}
}
