import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { PostModel, PostResponseModel } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public selectedPost?: PostModel;

  private readonly POST_URL = 'https://jsonplaceholder.typicode.com/posts';

  private readonly LIMIT = 10;

  constructor(private http: HttpClient) {}

  getPosts(page: number, searchCriteria: string): Observable<PostResponseModel> {
    let params = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', this.LIMIT.toString());

    if (searchCriteria) {
      params = params.append('title_like', searchCriteria);
    }

    return this.http.get<PostModel[]>(this.POST_URL, { params }).pipe(
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
    const url = `${this.POST_URL}/${id}`;
    return this.http.get<PostModel>(url).pipe(
      catchError((error) => {
        console.log('ERROR', error);
        return EMPTY;
      }),
    );
  }
}
