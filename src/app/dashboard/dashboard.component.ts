import { UnlabelledCommentsService } from './../-shared/services/unlabelled-comments.service';
import { LabelledCommentsService } from './../-shared/services/labelled-comments.service';
import { CommentsService } from './../-shared/services/comments.service';
import { Component, OnInit, Input } from '@angular/core';
import { Comment } from './../-shared/model/comment';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allComments: Array<Comment>;

  labelledComments = new Array<Comment>();
  unlabelledComments = new Array<Comment>();

  nbDeletedComments: number;
  nbNotDeletedComments: number;

  constructor(private commentsService: CommentsService,
            private labelledService: LabelledCommentsService,
            private unlabelledService: UnlabelledCommentsService) { }

  ngOnInit() {
    this.commentsService.getAll().subscribe(
      data => {
        this.allComments = data;
      }
    );

    this.commentsService.getNumberOfDeleted().subscribe(res => this.nbDeletedComments = res);
    this.commentsService.getNumberOfNotDeleted().subscribe(res => this.nbNotDeletedComments = res);

    this.unlabelledService.getAll().subscribe(
      data => {
        this.unlabelledComments = data;
        console.log(this.getWidthProgressBarUnlabelled());
      }
    );

    this.labelledService.getAll().subscribe(
      data => {
        this.labelledComments = data;
        console.log(this.getWidthProgressBarLabelled());
      }
    );
  }

  getPercentage(n: number) {
    return 100 * n / this.labelledComments.length;
  }

  getWidthProgressBarLabelled() {
    const perc = 100 * this.labelledComments.length / this.allComments.length;
    return perc + '%';
  }

  getWidthProgressBarUnlabelled() {
    const perc = 100 * this.unlabelledComments.length / this.allComments.length;
    return perc + '%';
  }

}
