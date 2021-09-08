import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { postsReducer } from './store/posts/posts.reducer';
import { JsonPlaceholderService } from './services/json-placeholder/json-placeholder.service';
import { PostComponent } from './components/post/post.component';
import { AppComponent } from './app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { ROUTES } from './constants/routes';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { RecentPostsPageComponent } from './pages/recent-posts-page/recent-posts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostsListComponent,
    LoaderComponent,
    FrontPageComponent,
    MainNavigationComponent,
    RecentPostsPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    StoreModule.forRoot({ posts: postsReducer }),
  ],
  providers: [JsonPlaceholderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
