import { Comment } from './../model/comment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Array<Comment>>('http://localhost:8080/comments');
  }

}
