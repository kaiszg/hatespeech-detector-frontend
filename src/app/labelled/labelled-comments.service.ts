import { Comment } from './../-shared/model/comment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LabelledCommentsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Array<Comment>>('http://localhost:8080/comments/labelled');
  }
}
