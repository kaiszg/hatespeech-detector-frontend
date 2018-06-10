import { CommentsService } from './../-shared/services/comments.service';
import { UnlabelledCommentsService } from './../-shared/services/unlabelled-comments.service';
import { Comment } from './../-shared/model/comment';
import { Component, OnInit, HostListener } from '@angular/core';
declare var $: any;

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-unlabelled',
  templateUrl: './unlabelled.component.html',
  styleUrls: ['./unlabelled.component.scss'],

})
export class UnlabelledComponent implements OnInit {

  title = 'Unlabelled comments';

  comments: Array<Comment>;

  constructor(private commentService: CommentsService, private unlabelledCommentsService: UnlabelledCommentsService) { }

  ngOnInit() {
    this.unlabelledCommentsService.getAll()
      .subscribe(
        data => {
          this.comments = data;
        }
      );
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.comments[0].label = 'deleted';
      this.commentService.updateComment(this.comments[0]).subscribe(
        data => {
          $('#comment-0').removeClass('selected');
          $('#comment-0').addClass('removed-comment');
          const self = this;
          $.when($('#comment-0').delay(350).fadeOut('medium'))
            .done(function () {
              self.comments.shift();
            });
        }
      );
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.comments[0].label = 'not deleted';
      this.commentService.updateComment(this.comments[0]).subscribe(
        data => {
          $('#comment-0').removeClass('selected');
          $('#comment-0').addClass('kept-comment');
          const self = this;
          $.when($('#comment-0').delay(350).fadeOut('medium'))
            .done(function () {
              self.comments.shift();
            });
        }
      );
    }
  }
}
