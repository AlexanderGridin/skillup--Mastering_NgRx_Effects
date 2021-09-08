import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPostsPageComponent } from './recent-posts-page.component';

describe('RecentPostsPageComponent', () => {
  let component: RecentPostsPageComponent;
  let fixture: ComponentFixture<RecentPostsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentPostsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentPostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
