import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostRoutingModule } from './post-routing.module';
import { PostItemComponent } from './components/post-item/post-item.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { PostListPageComponent } from './pages/post-list-page/post-list-page.component';
import { CommentComponent } from './components/comment/comment.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { postReducer } from './reducers/post.reducer';
import { PostEffects } from './effects/post.effects';

@NgModule({
  declarations: [
    PostItemComponent,
    DetailedPageComponent,
    PostListPageComponent,
    CommentComponent,
    UserPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostRoutingModule,
    StoreModule.forFeature('posts', postReducer),
    EffectsModule.forFeature([PostEffects]),
  ],
  exports: [DetailedPageComponent],
})
export class PostModule {}
