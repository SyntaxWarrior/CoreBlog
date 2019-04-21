import { Injectable, NgModule } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { BlogBaseInfo } from './models/blog/blogBaseInfo';
import { BlogPost } from './models/blog/blogPost';

@NgModule({
  imports: [ HttpClientModule ]
})
// // import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators';
// import { Observable } from 'rxjs';
// import { pipe } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor(private http: HttpClient) {}

  private cachePostIds: Observable<BlogBaseInfo>;
  private cacheBlogPosts: { [id: number]: Observable<BlogPost>; } = {};

  public getBlogAllPostIds(): Observable<BlogBaseInfo> {
    if (this.cachePostIds == null) {
      this.cachePostIds = this.http.get<BlogBaseInfo>('/data/blog/info.json');
      console.log("getBlogAllPostIds get it");
    }
    return this.cachePostIds;
  }

  public getBlogPost(id: number): Observable<BlogPost> {
    if (this.cacheBlogPosts[id] == null) {
      console.log("getBlogPost GET IT: " + id);
      this.cacheBlogPosts[id] = this.http.get<BlogPost>('/data/blog/posts/' + id + '/post.json');
    }

    return this.cacheBlogPosts[id];
  }
}


