import { Component, OnInit } from '@angular/core';
import { CacheService } from 'src/app/cache.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})

export class TagComponent implements OnInit {

  public tagName: string;
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

      this.postIds = [];
      this.showPosts = false;

      // tslint:disable-next-line:no-string-literal
      this.tagName = this.route.snapshot.params['tag'] as string;
      // tslint:disable-next-line:no-string-literal
      let page = this.route.snapshot.params['page'] as number;
      if (page == null) {
        page = 1;
      }

      this.pageNumber = page;
      console.log('tag: ' + this.tagName + ', page: ' + page);

      this.cacheService.getBlogSettings().subscribe(settings => {
        this.cacheService
          .getTagPosts(this.tagName)
            .subscribe(posts => {
              this.postsPerPage = settings.postsPerPage;
              if (posts) {
                this.postIds = posts.posts;
              }
              console.log('tagger: ' + this.postIds);
              this.showPosts = true;
            }
          );
      });
    });
  }
}
