import { Routes } from '@angular/router';

import { FrontPageComponent } from '../pages/front-page/front-page.component';
import { RecentPostsPageComponent } from '../pages/recent-posts-page/recent-posts-page.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: FrontPageComponent,
  },
  {
    path: 'recent-posts',
    component: RecentPostsPageComponent,
  },
];
