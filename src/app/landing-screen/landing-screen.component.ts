import { Component, OnInit } from '@angular/core';
import { bounceInDownAnimation, fadeInOnEnterAnimation, bounceAnimation, fadeOutOnLeaveAnimation, slideInLeftAnimation, pulseAnimation, slideInUpAnimation, } from 'angular-animations';

@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    bounceInDownAnimation(),
    slideInLeftAnimation(),
    bounceAnimation(),
    slideInUpAnimation(),
    pulseAnimation({ anchor: "pulse" })
  ]
})
export class LandingScreenComponent implements OnInit {
  animationState = false;
  animationWithState = false;
  constructor() {
    this.animate();
  }
  ngOnInit(): void {

  }

  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
      this.animationWithState = !this.animationWithState;
    }, 1);
  }
}
