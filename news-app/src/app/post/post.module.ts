import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { DetailedPageComponent } from './pages/detailed-page/detailed-page.component';

@NgModule({
  declarations: [PostItemComponent, PostListComponent, DetailedPageComponent],
  imports: [CommonModule, PostRoutingModule],
  exports: [PostListComponent, DetailedPageComponent],
})
export class PostModule {}
