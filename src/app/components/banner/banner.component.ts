import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(2000, style({opacity: 1}))
      ])
    ])
  ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  

  ngOnInit(): void {
  }

}
