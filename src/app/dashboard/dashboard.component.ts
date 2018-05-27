import { Component, OnInit, Input } from '@angular/core';
import { Comment } from './../-shared/model/comment';
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  ngOnInit() {

  }

}
