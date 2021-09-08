import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder/json-placeholder.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
})
export class FrontPageComponent implements OnInit {
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
