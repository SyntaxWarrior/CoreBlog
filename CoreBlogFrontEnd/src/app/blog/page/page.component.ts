import { Component, OnInit } from '@angular/core';
import { CacheService } from '../../cache.service';
import { BlogBaseInfo } from '../../models/blog/blogBaseInfo';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from '../../models/blog/blogPost';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public pageNumber: number;
  public blogPosts: Array<BlogPost> = new Array<BlogPost>();
  public postIdsToLoad: number[] = [];

  public maxPages: number;

  public loaded = false;

  constructor(private cacheService: CacheService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {

      // tslint:disable-next-line:no-string-literal
      let page = this.route.snapshot.params['page'] as number;
      if (page == null) {
        page = 1;
      }

      this.pageNumber = page;

      console.log('page: ' + page);
      cacheService
        .getBlogAllPostIds()
        .subscribe(postIds => this.loadPage(cacheService, postIds, page)
      );
    });
  }

  private loadPage(cacheService: CacheService, blogBaseInfo: BlogBaseInfo, page: number) {
    const pageIndex = (page - 1) * blogBaseInfo.postsPerPage;
    this.maxPages = Math.ceil(blogBaseInfo.posts.length / blogBaseInfo.postsPerPage);

    if (pageIndex < blogBaseInfo.posts.length) {
      this.postIdsToLoad = blogBaseInfo.posts.slice(pageIndex, pageIndex + blogBaseInfo.postsPerPage);

      if (this.maxPages > page + 1) {
          this.maxPages = page + 1;
      }
    } else {
      this.postIdsToLoad = [];
    }
    this.loaded = true;
  }

  public arrayOne(n: number): any[] {
    return Array(n);
  }

  ngOnInit() {
  }
}
