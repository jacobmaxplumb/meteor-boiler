
import { HomePage } from './../pages/home/home';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Meteor } from 'meteor/meteor';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;
  homePage = HomePage;
  loginPage = LoginPage;
  isLoggedIn = false;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.isLoggedIn = Meteor.user() ? true : false;
    this.rootPage = Meteor.user() ? HomePage : LoginPage
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    this.rootPage = page;
  }

  logOut() {
    Meteor.logout();
    this.rootPage = LoginPage
  }
}

