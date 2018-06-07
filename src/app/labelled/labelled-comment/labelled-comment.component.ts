import { Comment } from './../../-shared/model/comment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-labelled-comment',
  templateUrl: './labelled-comment.component.html',
  styleUrls: ['./labelled-comment.component.scss']
})
export class LabelledCommentComponent implements OnInit {

  @Input() comment: Comment;
  processedComment: Comment;

  constructor() { }

  ngOnInit() {
    this.processedComment = new Comment();
    this.processedComment.id = this.comment.id;
    this.processedComment.label = this.comment.label;
    this.processedComment.subLabel = this.comment.subLabel;
    this.processedComment.timestamp = this.comment.timestamp;
    this.processedComment.score = this.comment.score;
    this.processedComment.url = this.comment.url;
    this.processedComment.text = this.comment.text;
    this.processedComment.text = this.processedComment.text.split('\\r\\n\\r\\n').join('<br>');
  }

  getWidthProgressBar(comment: Comment) {
    const score = comment.score * 100;
    return score + '%';
  }

}
