import { Comment } from './../../-shared/model/comment';
import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-unlabelled-comment',
  templateUrl: './unlabelled-comment.component.html',
  styleUrls: ['./unlabelled-comment.component.scss']
})
export class UnlabelledCommentComponent implements OnInit {

  @Input() comment: Comment;

  constructor() { }

  ngOnInit() {
    $(document).foundation();
    this.comment.text = this.comment.text.split('\\r\\n\\r\\n').join('<br>');
  }

  getWidthProgressBar(comment: Comment) {
    const score = comment.score * 100;
    return score + '%';
  }
}
