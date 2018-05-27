import { UnlabelledCommentsService } from './../-shared/services/unlabelled-comments.service';
import { Comment } from './../-shared/model/comment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unlabelled',
  templateUrl: './unlabelled.component.html',
  styleUrls: ['./unlabelled.component.scss'],

})
export class UnlabelledComponent implements OnInit {

  title = 'Unlabelled comments';

  comments: Array<Comment>;

  constructor(private unlabelledCommentsService: UnlabelledCommentsService) { }

  ngOnInit() {
    this.unlabelledCommentsService.getAll()
      .subscribe(
        data => {
          this.comments = data;
        }
      );
  }


}
