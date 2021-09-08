import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './store/posts/posts.reducer';
import { JsonPlaceholderService } from './services/json-placeholder/json-placeholder.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';

@NgModule({
  declarations: [AppComponent, PostComponent, PostsListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ posts: postsReducer }),
  ],
  providers: [JsonPlaceholderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
