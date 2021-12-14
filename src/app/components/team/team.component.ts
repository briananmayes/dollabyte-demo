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
  }

}
