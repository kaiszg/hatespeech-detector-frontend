import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() comment: Comment;

 comments: Array<Comment>;
 title: String = 'General view of all comments';
  uc = 'Number of unlabelled comments';
  lc = 'Number of labelled comments';


  constructor() { }

  ngOnInit() {
  }
  getWidthProgressBar(comments: Comment) {
    const len = comments.length;
    return len + '%';
  }
}
