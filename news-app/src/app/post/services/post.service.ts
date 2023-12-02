import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { CommentModel, PostModel, PostResponseModel, UserModel } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public selectedPost?: PostModel;

  private readonly POST_URL = 'https://jsonplaceholder.typicode.com';

  private readonly LIMIT = 10;

  constructor(private http: HttpClient) {}

  getPosts(page: number, searchCriteria: string): Observable<PostResponseModel> {
    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', this.LIMIT.toString());

    if (searchCriteria) {
      params = params.append('title_like', searchCriteria);
    }

    const url = `${this.POST_URL}/posts`;

    return this.http.get<PostModel[]>(url, { params }).pipe(
      map((posts) => ({
        posts,
        hasMorePosts: posts.length === this.LIMIT,
      })),
      catchError((error) => {
        console.log('ERROR', error);
        return EMPTY;
      }),
    );
  }

  getPost(id: number): Observable<PostModel> {
    const url = `${this.POST_URL}/posts/${id}`;
    return this.http.get<PostModel>(url).pipe(
      catchError((error) => {
        console.log('ERROR', error);
        return EMPTY;
      }),
    );
  }

  getComments(id: number): Observable<CommentModel[]> {
    const url = `${this.POST_URL}/posts/${id}/comments`;
    return this.http.get<CommentModel[]>(url).pipe(
      catchError((error) => {
        console.log('ERROR', error);
        return EMPTY;
      }),
    );
  }

  getUser(id: number): Observable<UserModel> {
    const url = `${this.POST_URL}/users/${id}`;
    return this.http.get<UserModel>(url).pipe(
      catchError((error) => {
        console.log('ERROR', error);
        return EMPTY;
      }),
    );
  }

  getUserPosts(id: number): Observable<PostModel[]> {
    const url = `${this.POST_URL}/users/${id}/posts`;
    return this.http.get<PostModel[]>(url).pipe(
      catchError((error) => {
        console.log('ERROR', error);
        return EMPTY;
      }),
    );
  }
}
