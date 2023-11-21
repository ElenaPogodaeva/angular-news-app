import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { PostRoutingModule } from './post-routing.module';
import { PostItemComponent } from './components/post-item/post-item.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';
import { PostListPageComponent } from './pages/post-list-page/post-list-page.component';

@NgModule({
  declarations: [PostItemComponent, DetailedPageComponent, PostListPageComponent],
  imports: [CommonModule, ReactiveFormsModule, PostRoutingModule],
  exports: [DetailedPageComponent],
})
export class PostModule {}
