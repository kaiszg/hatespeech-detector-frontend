import { CommentsService } from './../../-shared/services/comments.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import * as moment from 'moment';


@Component({
  selector: 'app-time-chart',
  templateUrl: './time-chart.component.html',
  styleUrls: ['./time-chart.component.scss']
})
export class TimeChartComponent implements OnInit {

  chart = new Array<any>();

  constructor(private commentService: CommentsService) { }

  ngOnInit() {
    this.commentService.getAll().subscribe(
      data => {
        // sortieren nach Uhrzeit
        data.sort(function(a, b) {
          const timeStrA = moment(a.timestamp).format('hh') + ':' + moment(a.timestamp).format('mm');
          const timeStrB = moment(b.timestamp).format('hh') + ':' + moment(b.timestamp).format('mm');
          const timeA = moment(timeStrA, 'hh:mm');
          const timeB = moment(timeStrB, 'hh:mm');
          if (timeA.isBefore(timeB)) { return -1; }
          if (timeA.isAfter(timeB)) { return 1; }
          return 0;
        });

        const times = data.map(res => moment(res.timestamp).format('hh') + ':' + moment(res.timestamp).format('mm'));
        const scores = data.map(res => res.score);

        this.chart = new Chart('time-chart', {
          type: 'line',
          data: {
            labels: times,
            datasets: [{
              label: 'Toxicity score per hour',
              backgroundColor: '#1779ba',
              borderColor: '#1779ba',
              data: scores,
              pointRadius: 0,
              fill: false,
              // lineTension: 0,
              borderWidth: 2
            }]
          },
          options: {
            scales: {
              xAxes: [{
                type: 'time',
                time: {
                  format: 'HH:mm',
                  unit: 'hour',
                  unitStepSize: 1,
                  displayFormats: {
                    'minute': 'HH:mm',
                    'hour': 'HH:mm',
                     min: '00:00',
                     max: '23:59'
                  }
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Score'
                }
              }]
            }
          }
        });
      }
    );
    this.commentService.getHourlyNbComments().subscribe(
      data => {
        const hours = data.map(res => res.hour + ':00');
        const nbComments = data.map(res => res.nbComments);
      }
    );
  }

}
