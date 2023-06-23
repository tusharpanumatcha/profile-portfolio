import { Component, OnInit } from '@angular/core';
import { rotateAnimation } from 'angular-animations';
@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss'],
  animations: [
    rotateAnimation()
  ]
})
export class TechStackComponent implements OnInit {

  frontends = [
    {
      name: "HTML",
      animate: false,
      logo: "html.jpg"
    },
    {
      name: "CSS",
      animate: false,
      logo: "css.png"
    },
    {
      name: "Java Script",
      animate: false,
      logo: "js.png"
    },
    {
      name: "J Query",
      animate: false,
      logo: "jquery.png"
    },
    {
      name: "Angular",
      animate: false,
      logo: "angular.png"
    },
    {
      name: "React",
      animate: false,
      logo: "react.png"
    },
    {
      name: "Vue",
      animate: false,
      logo: "vue.png"
    }
  ];
  feDevtools = [
    {
      name: "VS Code",
      animate: false,
      logo: "vscode.png"
    }
  ]
  backends = [
    {
      name: "Node JS",
      animate: false,
      logo: "node.png"
    },
    {
      name: "Nest JS",
      animate: false,
      logo: "nest.png"
    },
    {
      name: "Express JS",
      animate: false,
      logo: "express.png"
    },
    {
      name: "Hapi JS",
      animate: false,
      logo: "hapi.png"
    },
    {
      name: "Koa JS",
      animate: false,
      logo: "Koa.png"
    }
  ];
  beDevtools = [
    {
      name: "VS Code",
      animate: false,
      logo: "vscode.png"
    },
    {
      name: "Postman",
      animate: false,
      logo: "postman.png"
    }
  ]
  databases = [
    {
      name: "MySQL",
      animate: false,
      logo: "mysql.jpg"
    },
    {
      name: "PostgreSQL",
      animate: false,
      logo: "postgre.jpg"
    },
    {
      name: "MongoDB",
      animate: false,
      logo: "mongodb.jpg"
    }
  ];
  dbDevtools = [
    {
      name: "Mongo Compass",
      animate: false,
      logo: "mongocompass.png"
    },
    {
      name: "MySQL Workbench",
      animate: false,
      logo: "mysqlwb.png"
    }
  ];

  animationState = false;
  animationWithState = false;
  constructor() { }

  ngOnInit(): void {
  }

  // stopAnimate(state) {
  //   state.animate = false;
  // }
  // animate(state) {
  //   state.animate = true;
  //   this.animationState = false;
  //   setTimeout(() => {
  //     state.animate = true;
  //     this.animationState = true;
  //     this.animationWithState = !this.animationWithState;
  //   }, 1);
  // }
}
