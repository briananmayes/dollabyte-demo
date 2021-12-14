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
  }

}
