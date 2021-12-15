import { AfterViewInit, Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-dollabyte',
  templateUrl: './dollabyte.component.html',
  styleUrls: ['./dollabyte.component.css'],
  // https://stackblitz.com/edit/angular-animation-fade-in?file=app%2Fapp.component.html //
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(2000, style({opacity: 1}))
      ])
    ])
  ]
})
export class DollabyteComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -900px 0px"                                                                                                                                                                                      
};

const appearOnScroll = new IntersectionObserver(
    function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, 
    appearOptions
);

faders.forEach(fader => appearOnScroll.observe(fader));

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})
  }





}
