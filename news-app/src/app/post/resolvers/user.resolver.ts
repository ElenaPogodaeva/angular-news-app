import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { PostModel, UserModel } from '../models/post.model';
import { PostService } from '../services/post.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<[UserModel, PostModel[]]> {
  constructor(private postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<[UserModel, PostModel[]]> {
    return forkJoin([
      this.postService.getUser(+route.params['id']),
      this.postService.getUserPosts(+route.params['id']),
    ]);
    // return this.postService.getUser(+route.params['id']).pipe(
    //   withLatestFrom(
    //     this.postService.getUserPosts(+route.params['id']),
    //   )
    // );
  }
}
