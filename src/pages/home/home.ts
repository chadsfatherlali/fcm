import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public text:String = '';
  public engine:any = null;

  constructor(
    public navCtrl: NavController,
    private storage: Storage
  ) {
    let _self = this
  
    _self.storage.ready().then(driver => {
      _self.engine = JSON.stringify(driver)
    });
    _self.storage.set('fcmDB', 'Santiago');
    
    setTimeout(() => {
      _self.storage.get('fcmDB').then(value => {
        _self.text = value
      })
    }, 3000) 
  }
}
