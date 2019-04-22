import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/cache.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
 
export class FrontComponent implements OnInit {

  public pageNumber: number;
  public postsPerPage: number;
  public postIds: number[];

  public showPosts = false;

  private cacheService: CacheService;

  constructor(private cacheSrv: CacheService, private route: ActivatedRoute) {
    this.cacheService = cacheSrv;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      let page = this.route.snapshot.params['page'] as number;
      if (page == null) {
        page = 1;
      }
      this.pageNumber = page;
      this.showPosts = false;

      this.cacheService
        .getBlogAllPostIds()
        .subscribe(postIds => {
          this.postsPerPage = postIds.postsPerPage;
          this.postIds = postIds.posts;
          this.showPosts = true;
        }
      );
    });
  }
}
