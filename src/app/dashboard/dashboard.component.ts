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

  nbCommentsToday: number;
  nbCommentsThisWeek: number;

  allComments: Array<Comment>;

  labelledComments = new Array<Comment>();
  unlabelledComments = new Array<Comment>();
  topFiveUnlabelledComments = new Array<Comment>();

  nbDeletedComments: number;
  nbNotDeletedComments: number;

  constructor(private commentsService: CommentsService,
            private labelledService: LabelledCommentsService,
            private unlabelledService: UnlabelledCommentsService) { }

  ngOnInit() {

    this.commentsService.getTopFiveUnlabelledCurrentWeek().subscribe(
      data => {
        this.topFiveUnlabelledComments = data;
      }
    );

    this.commentsService.getNumberOfDeleted().subscribe(res => this.nbDeletedComments = res);
    this.commentsService.getNumberOfNotDeleted().subscribe(res => this.nbNotDeletedComments = res);

    this.labelledService.getAll().subscribe(
      data => {
        this.labelledComments = data;
      }
    );

    this.unlabelledService.getAll().subscribe(
      data => {
        this.unlabelledComments = data;
      }
    );

    this.commentsService.getNbCommentsToday().subscribe(data => { this.nbCommentsToday = data; });
    this.commentsService.getNbCommentsThisWeek().subscribe(data => { this.nbCommentsThisWeek = data; });
  }

  getTitleFromUrl(url: string) {
    let title = url.replace('/forum/Telepolis/Kommentare/', '');
    title = title.substring(0, title.indexOf('/'));
    title = title.split('-').join(' ');
    return title;
  }

  getPercentage(n: number) {
    this.labelledService.getAll().subscribe(
      data => {
        this.labelledComments = data;
        return 100 * n / this.labelledComments.length;
      }
    );
  }
}
