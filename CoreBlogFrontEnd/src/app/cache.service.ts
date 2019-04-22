import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlogPost } from './models/blog/BlogPost';
import { BlogSettings } from './models/base/BlogSettings';
import { BlogPosts } from './models/blog/BlogPosts';

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

  private cacheBlogSettings: Observable<BlogSettings>;
  public getBlogSettings(): Observable<BlogSettings> {
    if (this.cacheBlogSettings == null) {
      this.cacheBlogSettings = this.http.get<BlogSettings>('/data/settings.json');
      console.log('get settings');
    }
    return this.cacheBlogSettings;
  }

  // tslint:disable-next-line:member-ordering
  private cachePostIds: Observable<BlogPosts>;
  public getBlogAllPostIds(): Observable<BlogPosts> {
    if (this.cachePostIds == null) {
      this.cachePostIds = this.http.get<BlogPosts>('/data/blog/posts.json');
      console.log('getBlogAllPostIds get it');
    }
    return this.cachePostIds;
  }

  // tslint:disable-next-line:member-ordering
  private cacheBlogPosts: { [id: number]: Observable<BlogPost>; } = {};
  public getBlogPost(id: number): Observable<BlogPost> {
    if (this.cacheBlogPosts[id] == null) {
      console.log('getBlogPost GET IT: ' + id);
      this.cacheBlogPosts[id] = this.http.get<BlogPost>('/data/blog/posts/' + id + '/post.json');
    }
    return this.cacheBlogPosts[id];
  }

  // tslint:disable-next-line:member-ordering
  private cacheTagPosts: { [tag: string]: Observable<BlogPosts> } = {};
  public getTagPosts(tag: string): Observable<BlogPosts> {
    console.log('tag: ' + tag);
    if (this.cacheTagPosts[tag] == null) {
      const url = '/data/blog/tags/' + tag + '.json';
      console.log('getTagPosts GET IT: ' + tag + ', url: ' + url);
      this.cacheTagPosts[tag] = this.http.get<BlogPosts>(url);
    }
    return this.cacheTagPosts[tag];
  }
}
