import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.css']
})
export class RoadmapComponent implements OnInit {

  constructor() { }

  roadmap = [
    {
      phase: "first",
      title: "Launch DollaByte",
      launch: "January 2022"
    },
    {
      phase: "second",
      title: "Benjamin Derivative Project",
      launch: "30 days post 1st launch"
    }
  ]

  ngOnInit(): void {
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px -100px 0px"                                                                                                                                                                                   
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
