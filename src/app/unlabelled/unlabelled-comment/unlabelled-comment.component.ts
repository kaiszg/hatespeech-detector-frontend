import { Comment } from './../../-shared/model/comment';
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-unlabelled-comment',
  templateUrl: './unlabelled-comment.component.html',
  styleUrls: ['./unlabelled-comment.component.scss']
})
export class UnlabelledCommentComponent implements OnInit {

  @Output() labelComment = new EventEmitter<Comment>();
  @Input() comment: Comment;
  processedComment: Comment;

  constructor() { }

  ngOnInit() {
    $(document).foundation();
    this.processedComment = new Comment();
    this.processedComment.id = this.comment.id;
    this.processedComment.label = this.comment.label;
    this.processedComment.subLabel = this.comment.subLabel;
    this.processedComment.timestamp = this.comment.timestamp;
    this.processedComment.score = this.comment.score;
    this.processedComment.url = this.comment.url;
    this.processedComment.text = this.comment.text;
    this.processedComment.text = this.processedComment.text.split('\\r\\n\\r\\n').join('<br>');
    this.processedComment.text = this.processedComment.text.split('\\r\\n').join('<br>');
  }

  keepComment(comment: Comment) {
    comment.label = 'not deleted';
    this.labelComment.emit(comment);
  }

  removeComment(comment: Comment) {
    comment.label = 'deleted';
    this.labelComment.emit(comment);
  }

  getUrlShowText(url: string) {
    let res = url.replace('/forum/Telepolis/Kommentare/', '');
    res = '.../' + res.substring(0, res.indexOf('/')) + '/...';
    return res;
  }

  getWidthProgressBar(comment: Comment) {
    const score = comment.score * 100;
    return score + '%';
  }

  getProgressBarColor(score: number) {
    if (score > 0.7) {
      return 'alert';
    } else if (score > 0.5) {
      return 'warning';
    }
    return 'success';
  }
}
