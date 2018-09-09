import { Meteor } from 'meteor/meteor';
import { LoginPage } from './../login/login';
import { Examples } from 'api/collections';
import { Example } from 'api/models';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  rootPage = this;
  examples: Observable<Example[]>;

  constructor(private navController: NavController) {}

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

  logOut() {
    Meteor.logout();
    this.navController.setRoot(LoginPage)
  }

}
