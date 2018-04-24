import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-unlabelled',
  templateUrl: './unlabelled.component.html',
  styleUrls: ['./unlabelled.component.scss'],

})
export class UnlabelledComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  commentcount: number;
  title = 'Unlabelled Comments';
  comment = '';
  // tslint:disable-next-line:max-line-length
  ulcomments = ['Integer quis dignissim metus. Pellentesque sem magna, sagittis ut felis ac, pharetra lobortis purus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque et consectetur ligula. Aliquam mollis laoreet sem, a congue arcu dictum ut. Nunc molestie augue.',
  // tslint:disable-next-line:max-line-length
  'In a ultricies odio, iaculis consequat erat. Integer pellentesque sodales diam, in ornare urna tempus a. Integer aliquet efficitur neque, volutpat mollis sem feugiat sed. Vivamus ac nisi non mi bibendum commodo eget nec ante. Nam volutpat malesuada lobortis. In. ',
  // tslint:disable-next-line:max-line-length
  'Sed lobortis sodales nulla quis efficitur. Morbi arcu ante, laoreet a rutrum non, accumsan ac nisi. Nunc ut risus maximus, ullamcorper nibh sed, interdum nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id leo vitae lectus sagittis mattis.',
  // tslint:disable-next-line:max-line-length
  'Proin arcu tellus, commodo ac auctor egestas, ultrices eget nibh. Phasellus turpis lorem, hendrerit sed dignissim nec, lacinia pharetra dolor. Vestibulum auctor turpis eget nisi fermentum, bibendum egestas nunc ultrices. Nam tristique imperdiet eleifend. Vivamus blandit commodo nulla, eget fermentum.',
  // tslint:disable-next-line:max-line-length
  'Mauris semper et neque rutrum facilisis. Duis et nunc quis nisi tempus dictum aliquet a orci. Sed elit odio, fringilla a feugiat vel, interdum ut libero. Sed nunc neque, pulvinar sed volutpat in, porta eu nunc. Maecenas fermentum, sapien nec.',
  ];
  constructor() { }

  ngOnInit() {
    this.commentcount = this.ulcomments.length;
  }


}
