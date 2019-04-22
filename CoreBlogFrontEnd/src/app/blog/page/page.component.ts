import { Component, OnInit, Input } from '@angular/core';
import { CacheService } from '../../cache.service';
import { BlogBaseInfo } from '../../models/blog/blogBaseInfo';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../../models/blog/blogPost';

@Component({
  selector: 'app-blog-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() public postIds: number[];
  @Input() public postsPerPage: number;
  @Input() public page: number;

  public pageNumber: number;
  public blogPosts: Array<BlogPost> = new Array<BlogPost>();
  public postIdsToLoad: number[] = [];

  public maxPages: number;

  public loaded = false;

  constructor() {}

  private loadPage(postsPerPage: number, postIds: number[], page: number) {
    this.postIdsToLoad = [];
    const pageIndex = (page - 1) * postsPerPage;
    this.maxPages = Math.ceil(postIds.length / postsPerPage);

    if (pageIndex < postIds.length) {
      this.postIdsToLoad = postIds.slice(pageIndex, pageIndex + postsPerPage);

      if (this.maxPages > page + 1) {
          this.maxPages = page + 1;
      }
    }

    this.loaded = true;
  }

  public arrayOne(n: number): any[] {
    return Array(n);
  }

  ngOnInit() {
    this.loadPage(this.postsPerPage, this.postIds, this.page);
  }
}
