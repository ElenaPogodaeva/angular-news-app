import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { PostListPageComponent } from './pages/post-list-page/post-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: PostListPageComponent,
  },
  {
    path: ':id',
    component: DetailedPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
