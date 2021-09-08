import { Component, OnInit } from '@angular/core';
import { Post } from './interfaces/post';
import { JsonPlaceholderService } from './services/json-placeholder/json-placeholder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'ngrx-effects';
  public posts!: Post[];

  constructor(private jsonPlaceholderSerives: JsonPlaceholderService) {}

  public ngOnInit(): void {
    this.getPosts();
  }

  public getPosts(): void {
    this.jsonPlaceholderSerives.getPostsFromApi().subscribe({
      next: (respose) => {
        console.log(respose);
        this.posts = respose;
      },
    });
  }
}
