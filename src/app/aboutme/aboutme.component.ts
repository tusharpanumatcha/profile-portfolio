import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutmeComponent implements OnInit {

  currentYear: number = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
