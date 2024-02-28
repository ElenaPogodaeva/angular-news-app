import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PostModel } from '../models/post.model';
import { PostService } from '../services/post.service';

@Injectable({
  providedIn: 'root',
})
export class PostResolver implements Resolve<PostModel> {
  constructor(private postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<PostModel> {
    return this.postService.getPost(+route.params['id']);
  }
}
