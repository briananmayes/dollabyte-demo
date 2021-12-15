import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, group } from '@angular/animations';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(2000, style({opacity: 1}))
      ])
    ])
  ]
})
export class UtilityComponent implements OnInit {

  constructor() { }

  url: string = "../../assets/images/Final DollaByte NFT.gif";

  utility = [
    {
      title: "2500 NFT Presale",
      text: "with 100 of them to receive VIP Event invitation to meet with Arthur at his LA Gallery.",
      url: this.url
    },
    {
      title: "1 NFT owner",
      text: "will receive a 2021 Rolls Royce Ghost with Arthur’s art on it. The NFT owner will have a their input in the art that’s drawn on the car to make it a very personal experience. The last Rolls Royce Arthur did went for almost $800,000, link below.",
      url: this.url
    },
    {
      title: "$DOLLA token",
      text: "each minted NFT will receive a select amount of daily tokens of Dollabyte. All royalties collected after the mint will be given to Dollabyte token to buy rare watches. Dollabyte watch collection will be held with Sotheby’s",
      url: this.url
    },
    {
      title: "1 NFT owner",
      text: "will receive exclusive behind the scenes experience either in Romania or Boston on the set of a blockbuster Hollywood movie.",
      url: this.url
    }
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

