import { LabelledCommentsService } from './../-shared/services/labelled-comments.service';

import { Comment } from './../-shared/model/comment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labelled',
  templateUrl: './labelled.component.html',
  styleUrls: ['./labelled.component.scss']
})
export class LabelledComponent implements OnInit {

  title = 'Labelled comments';

  comments: Array<Comment>;

  constructor(private labelledCommentsService: LabelledCommentsService) { }

  ngOnInit() {
    this.labelledCommentsService.getAll().subscribe(
      data => {
        this.comments = data;
      }
    );
  }
}
