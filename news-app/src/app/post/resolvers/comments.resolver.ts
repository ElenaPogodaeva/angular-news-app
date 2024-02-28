import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CommentModel } from '../models/post.model';
import { PostService } from '../services/post.service';

@Injectable({
  providedIn: 'root',
})
export class CommentsResolver implements Resolve<CommentModel[]> {
  constructor(private postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CommentModel[]> {
    return this.postService.getComments(+route.params['id']);
  }
}
