import { HomePage } from './../home/home';
import { Component, OnInit } from '@angular/core';
import { Profile } from 'api/models';
import { AlertController, NavController } from 'ionic-angular';
import { MeteorObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfilePage implements OnInit {
  picture: string;
  profile: Profile;

  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}

  ngOnInit(): void {
    this.profile = Meteor.user().profile || {
      name: ''
    };
  }

  updateProfile(): void {
    MeteorObservable.call('updateProfile', this.profile).subscribe({
      next: () => {
        this.navCtrl.setRoot(HomePage);
      },
      error: (e: Error) => {
        this.handleError(e);
      }
    });
  }

  handleError(e: Error): void {
    console.error(e);

    const alert = this.alertCtrl.create({
      title: 'Oops!',
      message: e.message,
      buttons: ['OK']
    });

    alert.present();
  }
}
