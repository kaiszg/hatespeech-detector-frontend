import { CommentsService } from './../../-shared/services/comments.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-time-chart',
  templateUrl: './time-chart.component.html',
  styleUrls: ['./time-chart.component.scss']
})
export class TimeChartComponent implements OnInit {

  chart = new Array<any>();

  constructor(private commentService: CommentsService) { }

  ngOnInit() {
    this.commentService.getHourlyNbComments().subscribe(
      data => {
        const hours = data.map(res => res.hour + ':00');
        const nbComments = data.map(res => res.nbComments);

        this.chart = new Chart('time-chart', {
          type: 'bar',
          data: {
            labels: hours,
            datasets: [{
              label: 'Anzahl der gelöschten Kommetare pro Stunde',
              data: nbComments,
              type: 'bar',
              pointRadius: 0,
              fill: false,
              lineTension: 0,
              borderWidth: 2
            }]
          },
          options: {
            scales: {
              xAxes: [{
                // type: 'time',
                distribution: 'series',
                ticks: {
                  source: 'labels'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Anzahl der Kommentare'
                }
              }]
            }
          }
        });
      }
    );
  }

}
