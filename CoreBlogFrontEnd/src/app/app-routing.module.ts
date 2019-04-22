import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SingleComponent } from './blog/single/single.component';
import { FrontComponent } from './blog/front/front.component';
import { TagComponent } from './blog/tag/tag.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },

  { path: 'b/:id/:title', component: SingleComponent },

  { path: 'tag/:tag', component: TagComponent },
  { path: 'tag/:tag/:page', component: TagComponent },

  { path: '', component: FrontComponent, pathMatch: 'full' },
  { path: ':page', component: FrontComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
