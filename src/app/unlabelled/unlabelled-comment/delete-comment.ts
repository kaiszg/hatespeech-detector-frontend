import { Comment } from './../../-shared/model/comment';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-unlabelled-comment',
  templateUrl: './unlabelled-comment.component.html',
  styleUrls: ['./unlabelled-comment.component.scss'],
  template: `
    <button (click)="onClickMe()">Click me!</button>
    {{clickMessage}}`
})

export class ClickMeComponent {
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
