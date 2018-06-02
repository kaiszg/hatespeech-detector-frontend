import { Comment } from './../../-shared/model/comment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-labelled-comment',
  templateUrl: './labelled-comment.component.html',
  styleUrls: ['./labelled-comment.component.scss']
})
export class LabelledCommentComponent implements OnInit {

  @Input() comment: Comment;

  constructor() { }

  ngOnInit() {

  }

  getWidthProgressBar(comment: Comment) {
    const score = comment.score * 100;
    return score + '%';
  }

}
