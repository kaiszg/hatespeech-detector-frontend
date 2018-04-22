import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit() {
    $(document).foundation();
    $('[data-app-dashboard-toggle-shrink]').on('click', function(e) {
      e.preventDefault();
      $(this).parents('.app-dashboard').toggleClass('shrink-medium').toggleClass('shrink-large');
    });
  }
}
