import { Examples } from 'api/collections';
import { Example } from 'api/models';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  rootPage = this;
  examples: Observable<Example[]>;

  constructor() {}

  ngOnInit() {
    Examples.find({}).subscribe((examples) => {
      console.log(examples)
    })
    this.examples = Examples.find({});
  }

  removeExample(example: Example) {
    Examples.remove(example);
  }

  openPage(p) {
    console.log(p)
  }

}
