import { Component } from '@angular/core';
import { NavController, Alert, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  like(){
    let alert = this.alertCtrl.create({
      title: 'Has dado un like',
      buttons: ['OK']
    });
    alert.present();
  }

  comentario(){
    let alert = this.alertCtrl.create({
      title: 'Has dado agragado un comentario',
      buttons: ['OK']
    });
    alert.present();
  }

  compartir(){
    let alert = this.alertCtrl.create({
      title: 'Has compartido esta publicacion',
      buttons: ['OK']
    });
    alert.present();
  }

}