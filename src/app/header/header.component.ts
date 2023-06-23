import { Component, OnInit } from '@angular/core';
import { bounceInDownAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    bounceInDownAnimation()
  ]
})
export class HeaderComponent implements OnInit {
  animationState = false;
  animationWithState = false;
  constructor() { }

  ngOnInit(): void {
  }

  public animate() {
    setTimeout(() => {
      this.animationState = true;
      this.animationWithState = !this.animationWithState;
    }, 2000);
  }

}
