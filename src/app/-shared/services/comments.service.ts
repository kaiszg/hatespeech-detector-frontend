import { Comment } from './../model/comment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Label } from '../model/label';
import { CommentHourStatistic } from '../model/comment-hour-statistic';

@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Array<Comment>>('http://localhost:8080/comments');
  }

  getLabelsWithNbComments() {
    return this.http.get<Array<Label>>('http://localhost:8080/labels/nb-comments');
  }

  getHourlyNbComments() {
    return this.http.get<Array<CommentHourStatistic>>('http://localhost:8080/comments/deleted/stats//hours');
  }

  updateComment(comment: Comment) {
    return this.http.put<Comment>('http://localhost:8080/comments', comment);
  }

}
