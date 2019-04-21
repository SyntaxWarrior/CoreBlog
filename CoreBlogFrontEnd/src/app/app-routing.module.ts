import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'b/:id/:title', component: AboutComponent },
  { path: '', component: BlogComponent, pathMatch: 'full' },
  { path: ':page', component: BlogComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
