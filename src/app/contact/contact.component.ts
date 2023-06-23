import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { bounceInDownAnimation,slideInDownAnimation, fadeInOnEnterAnimation, bounceAnimation, fadeOutOnLeaveAnimation, slideInLeftAnimation, pulseAnimation, slideInUpAnimation, } from 'angular-animations';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    bounceInDownAnimation(),
    slideInLeftAnimation(),
    bounceAnimation(),
    slideInUpAnimation(),
    slideInDownAnimation(),
    pulseAnimation({ anchor: "pulse" })
  ]
})
export class ContactComponent implements OnInit {
  animationState = false;
  animationWithState = false;
  constructor(private router: Router, private toastr: ToastrService) {
    this.animate();
  }
  ngOnInit(): void {

  }
  navigatePortfolio() {
    // this.toastr.success( 'Will get back Soon!', 'Thanks for Reaching', {
    //   timeOut: 5000,
    // });
    this.router.navigate(['/portfolio']);
  }

  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
      this.animationWithState = !this.animationWithState;
    }, 1);
  }
}
