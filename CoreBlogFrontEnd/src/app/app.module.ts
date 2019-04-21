import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './blog/post/post.component';
import { PageComponent } from './blog/page/page.component';
import { SingleComponent } from './blog/single/single.component';
import { CommentComponent } from './blog/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PostComponent,
    PageComponent,
    SingleComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
