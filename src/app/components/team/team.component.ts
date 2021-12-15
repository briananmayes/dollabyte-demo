import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor() { }

  speakers = [
    {
      id: 1,
      img: "",
      name: "Team Member 1",
      title: "CEO"
    },
    {
      id: 2,
      img: "",
      name: "Team Member 2",
      title: "Developer"
    },
    {
      id: 3,
      img: "",
      name: "Team Member 3",
      title: "Graphic Designer"
    },
    {
      id: 4,
      img: "",
      name: "Team Member 4",
      title: "Developer"
    },

  ]

  ngOnInit(): void {
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
  threshold: 0.5                                                                                                                                                                                      
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
});
  }

}
