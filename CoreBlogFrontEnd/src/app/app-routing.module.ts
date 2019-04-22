import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PageComponent } from './blog/page/page.component';
import { SingleComponent } from './blog/single/single.component';
import { FrontComponent } from './blog/front/front.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'b/:id/:title', component: SingleComponent },
  { path: '', component: FrontComponent, pathMatch: 'full' },
  { path: ':page', component: FrontComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
