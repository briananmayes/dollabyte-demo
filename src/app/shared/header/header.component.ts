import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) _document:any, 
              private router: Router) { }
  
              // Navigation
  navMethod: boolean = true;
  toggleNav() {
    this.navMethod = !this.navMethod;
  }
  // Mobile 
  open: boolean = false;
  trigger(item: { open: boolean; }){
    item.open = !item.open;
  }
  // Sticky Header
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(_e: any) {
    if (window.pageYOffset > 110) {
      let element = <HTMLElement>document.getElementById('sticky-header');
      element.classList.add('sticky');
    } else {
      let element = <HTMLElement>document.getElementById('sticky-header');
      element.classList.remove('sticky');
    }
  }
  // Add class on resize and onload window
  visible: boolean = false;
  breakpoint: number = 991;
  public innerWidth: any;
  detectHeader() {
    this.innerWidth = window.innerWidth;
    this.visible = this.innerWidth >= this.breakpoint;
  }

  ngOnInit(): void {
    this.detectHeader();

    const header = document.querySelector("header");
    const sectionOne = document.querySelector(".home-intro");

    const sectionOneOptions = {
      rootMargin: "-200px 0px 0px 0px"
    };
    
    const sectionOneObserver = new IntersectionObserver(function(
      entries,
      sectionOneObserver
    ) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          header.classList.add("nav-scrolled");
        } else {
          header.classList.remove("nav-scrolled");
        }
      });
    },
    sectionOneOptions);
    
    sectionOneObserver.observe(sectionOne);

  }

  navigateToAbout(): void {
    this.router.navigate(['/']).then(() => {
      window.location.hash='about-dollabyte'
    });
  }

  navigateToArthur(): void {
    this.router.navigate(['/']).then(() => {
      window.location.hash='about-arthur'
    });
  }

  navigateToUtility(): void {
    this.router.navigate(['/']).then(() => {
      window.location.hash='utility'
    });
  }

  navigateToRoadmap(): void {
    this.router.navigate(['/']).then(() => {
      window.location.hash='roadmap'
    });
  }

  navigateToTeam(): void {
    this.router.navigate(['/']).then(() => {
      window.location.hash='team'
    });
  }

}
