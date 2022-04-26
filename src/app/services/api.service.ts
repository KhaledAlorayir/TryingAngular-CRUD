import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  route = 'http://localhost:5000/posts';

  constructor(private api: HttpClient) {}

  addPost(p: Post): Observable<any> {
    return this.api.post(this.route, p);
  }

  getPosts(): Observable<any> {
    return this.api.get(this.route);
  }

  getPost(id: number): Observable<any> {
    return this.api.get(`${this.route}/${id}`);
  }

  deletePost(id: number): Observable<any> {
    return this.api.delete(`${this.route}/${id}`);
  }

  updatePost(post: Post) {
    return this.api.patch(`${this.route}/${post.id}`, post);
  }
}
