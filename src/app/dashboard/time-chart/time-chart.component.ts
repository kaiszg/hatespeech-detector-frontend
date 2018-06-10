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
          const timeStrA = moment(a.timestamp).format('HH') + ':' + moment(a.timestamp).format('mm');
          const timeStrB = moment(b.timestamp).format('HH') + ':' + moment(b.timestamp).format('mm');
          const timeA = moment(timeStrA, 'HH:mm');
          const timeB = moment(timeStrB, 'HH:mm');
          if (timeA.isBefore(timeB)) { return -1; }
          if (timeA.isAfter(timeB)) { return 1; }
          return 0;
        });

        const times = data.map(comment => moment(comment.timestamp).format('HH') + ':' + moment(comment.timestamp).format('mm'));
        const scores = data.map(res => res.score);

        console.log('data');
        console.log(data);
        console.log('times');
        console.log(times);
        console.log('scores');
        console.log(scores);

        this.chart = new Chart('time-chart', {
          type: 'line',
          data: {
            labels: times,
            datasets: [{
              label: 'Toxicity score',
              backgroundColor: '#1779ba',
              borderColor: '#1779ba',
              data: scores,
              pointRadius: 0,
              fill: false,
              borderWidth: 2
            }]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                type: 'time',
                time: {
                  parser: 'HH:mm',
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
  }

}
