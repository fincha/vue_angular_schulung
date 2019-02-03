import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.sass']
})
export class HelloWorldComponent implements OnInit {
  counter = 1;

  constructor() { }

  ngOnInit() {
  }

  add(v = 1) {
    this.counter += v;
  }

}
