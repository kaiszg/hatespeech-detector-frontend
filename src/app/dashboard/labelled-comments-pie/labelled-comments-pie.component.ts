import { CommentsService } from './../../-shared/services/comments.service';
import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-labelled-comments-pie',
  templateUrl: './labelled-comments-pie.component.html',
  styleUrls: ['./labelled-comments-pie.component.scss']
})
export class LabelledCommentsPieComponent implements OnInit {

  chart = new Array<any>();

  constructor(private commentService: CommentsService) { }

  ngOnInit() {
    this.commentService.getLabelsWithNbComments().subscribe(
      data => {
        const labelsOfComments = data.map(res => res.label);
        const numbers = data.map(res => res.nbComments);

        this.chart = new Chart('canvas', {
          type: 'pie',
          data: {
            labels: labelsOfComments,
            datasets: [
              {
                data: numbers,
                backgroundColor: this.getDynamicBackgroudColors(labelsOfComments)
              }
            ]
          },
          options: {
            responsive: true
          }
        });
      }
    );
  }

  getDynamicBackgroudColors(labels: string[]): string[] {
    const colors = new Array<string>();
    labels.forEach(label => {
      colors.push(this.getDynamicColor());
    });
    return colors;
  }

  getDynamicColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

}
