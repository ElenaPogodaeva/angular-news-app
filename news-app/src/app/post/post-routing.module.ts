import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { PostListPageComponent } from './pages/post-list-page/post-list-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  {
    path: '',
    component: PostListPageComponent,
  },
  {
    path: ':id',
    component: DetailedPageComponent,
  },
  {
    path: 'users/:id',
    component: UserPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
