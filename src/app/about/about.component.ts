import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  articles = [
    {
      title: "Rolls Royce Article",
      url: "https://robbreport.com/motors/cars/rolls-royce-wraith-custom-art-williams-jr-2820897/"
    },
    {
      title: "NBC Interview",
      utl: "https://www.lx.com/money/how-a-master-counterfeiter-went-from-prison-to-the-hollywood-art-scene/36434/"
    },
    {
      title: "LA Magazine",
      url: "https://www.lamag.com/culturefiles/arthur-j-williams-davincis-gallery/"
    },
    {
      title: "Forbes",
      url: "https://www.forbes.com/2009/06/29/art-of-making-money-opinions-book-review-jason-kersten.html?sh=1b0c12b566c0"
    },
    {
      title: "CNBC American Greed Episode 46",
      url: "https://www.cnbc.com/id/100000024"
    },
    {
      title: "Miami Art Basel Article #1",
      url: "https://sociallifemagazine.com/2021/12/06/an-inside-look-highlights-from-art-basel-2021-nfts-art-crypto-music-more-take-over-miami/"
    },
    {
      title: "Miami Art Basel Article",
      url: "https://theknockturnal.com/art-basel-in-review-event-highlights-from-miami-2021-art-crypto-music-more-the-hottest-parties-and-exhibits/"
    }

  ]

  videos = [
    {
      title: "Arthur's Message On What His Passion Is And Why NFTs",
      url: "https://youtu.be/3autq7pbc78"
    },
    {
      title: "Arthur's Real Life Art Pieces",
      url: "https://youtu.be/uyQZzsabwvQ"
    },
    {
      title: "Vice Interview",
      url: "https://youtu.be/hIylnZ7lCEM"
    },
    {
      title: "Beverly Hills Gallery Opening",
      url: "https://youtu.be/Is3C4nyFdds"
    },
    {
      title: "Crypto Auction Video",
      url: "https://www.youtube.com/watch?v=uOHN6SNabCQ&feature=youtu.be"
    },
    {
      title: "Mohammed Ali Foundation Auction",
      url: "https://www.youtube.com/watch?app=desktop&v=Tvy4s9GSLVc&feature=youtu.be"
    }
    

  ]

  ngOnInit(): void {
  }

}
