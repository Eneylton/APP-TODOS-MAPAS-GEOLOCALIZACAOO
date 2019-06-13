import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lat:any;
  lgn:any;

  lat2:any;
  lgn2:any;

  constructor(public navCtrl: NavController,private geolocation: Geolocation) {
    this.buscarLocal();
  }


buscarLocal(){
  this.geolocation.getCurrentPosition().then((resp) => {
    this.lat = resp.coords.latitude
    this.lgn = resp.coords.longitude
   }).catch((error) => {
     console.log('Error getting location', error);
   });
   
   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {

    this.lat2= data.coords.latitude
    this.lgn2= data.coords.longitude
   });


}
  
  }
