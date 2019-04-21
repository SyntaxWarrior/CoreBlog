import { Component, OnInit, Input } from '@angular/core';
import { CacheService } from 'src/app/cache.service';
import { BlogPost } from 'src/app/models/blog/blogPost';

@Component({
  selector: 'app-blog-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
    private PostId: number;

  public blogPost: BlogPost;
  private cacheService: CacheService;

  constructor(cacheS: CacheService) {
    this.cacheService = cacheS;
  }

  private loadPost(cacheService: CacheService, postId: number) {
      cacheService.getBlogPost(postId).subscribe(post => {
        this.blogPost = post;
      });
  }

  ngOnInit() {
    this.loadPost(this.cacheService, this.PostId);
  }
}
