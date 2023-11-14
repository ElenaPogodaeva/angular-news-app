import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EMPTY, Observable, catchError } from 'rxjs';
import { PostModel } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  public selectedPost?: PostModel;

  private readonly POST_URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.POST_URL).pipe(
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
