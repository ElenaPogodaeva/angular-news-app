import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { PostListPageComponent } from './pages/post-list-page/post-list-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PostResolver } from './resolvers/post.resolver';
import { CommentsResolver } from './resolvers/comments.resolver';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: PostListPageComponent,
  },
  {
    path: ':id',
    component: DetailedPageComponent,
    resolve: {
      post: PostResolver,
      comments: CommentsResolver,
    },
  },
  {
    path: 'users/:id',
    component: UserPageComponent,
    resolve: {
      user: UserResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
