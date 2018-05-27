import { LabelledCommentsService } from './../labelled/labelled-comments.service';
import { UnlabelledCommentsService } from './../unlabelled/unlabelled-comments.service';
import { Component, OnInit, Input } from '@angular/core';
import { Comment } from './../-shared/model/comment';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() comment: Comment;

 comments: Array<Comment>;
 labcomments: Array<Comment>;

 title: String = 'General view of all comments';
  uc = 'Number of unlabelled comments';
  lc = 'Number of labelled comments';

  constructor(private http: HttpClient,
     private unlabelledCommentsService: UnlabelledCommentsService,
     private labelledCommentsService: LabelledCommentsService) { }

  getAll_labelled() {
    return this.http.get<Array<Comment>>('http://localhost:8080/comments/labelled');
  }
  getAll_unlabelled() {
    return this.http.get<Array<Comment>>('http://localhost:8080/comments/unlabelled');
  }
  getWidthProgressBar_ul(comment: Comment) {
        return this.comments.length;
  }
  getWidthProgressBar_lc(comment: Comment) {
    return this.labcomments.length;
}



  ngOnInit() {
    this.unlabelledCommentsService.getAll()
      .subscribe(
        data => {
          this.comments = data;
        }
      ),
      this.labelledCommentsService.getAll()
        .subscribe(
          data => {
            this.labcomments = data;
          }
        );
  }
}
