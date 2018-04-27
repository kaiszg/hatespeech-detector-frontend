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

  constructor() { }

  ngOnInit() {
    this.comments = new Array<Comment>();
    const comment1: Comment = new Comment();
    comment1.id = 1;
    // tslint:disable-next-line:max-line-length
    comment1.text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam';
    comment1.score = 0.94;
    comment1.label = 'deleted';
    comment1.timestamp = new Date('2015-12-17T03:24:00');
    comment1.url = 'http://www.heise.com/comments/234567';

    const comment2: Comment = new Comment();
    comment2.id = 2;
    // tslint:disable-next-line:max-line-length
    comment2.text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et';
    comment2.score = 0.87;
    comment2.label = 'not deleted';
    comment2.timestamp = new Date('2016-01-07T03:24:00');
    comment2.url = 'http://www.heise.com/comments/45745';

    const comment3: Comment = new Comment();
    comment3.id = 3;
    // tslint:disable-next-line:max-line-length
    comment3.text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et';
    comment3.score = 0.35;
    comment3.label = 'discrimination';
    comment3.timestamp = new Date('2009-03-25T03:24:00');
    comment3.url = 'http://www.heise.com/comments/46767978';

    const comment4: Comment = new Comment();
    comment4.id = 4;
    // tslint:disable-next-line:max-line-length
    comment4.text = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et';
    comment4.score = 0.23;
    comment4.label = 'deleted';
    comment4.timestamp = new Date('2017-07-28T03:24:00');
    comment4.url = 'http://www.heise.com/comments/7896456345';

    this.comments.push(comment1);
    this.comments.push(comment2);
    this.comments.push(comment3);
    this.comments.push(comment4);

    console.log(this.comments);
  }
}
