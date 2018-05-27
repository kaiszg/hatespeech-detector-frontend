import { Comment } from './../../-shared/model/comment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-unlabelled-comment',
  templateUrl: './unlabelled-comment.component.html',
  styleUrls: ['./unlabelled-comment.component.scss']
})
export class UnlabelledCommentComponent implements OnInit {

  @Input() comment: Comment;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    $(document).foundation();
  }

  getWidthProgressBar(comment: Comment) {
    const score = comment.score * 100;
    return score + '%';
  }

  getAll() {
    return this.http.get<Array<Comment>>('http://localhost:8080/comments/unlabelled');
  }

}
