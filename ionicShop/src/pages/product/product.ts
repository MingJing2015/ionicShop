// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the Product page.
//  *
//  * See http://ionicframework.com/docs/components/#navigation for more info
//  * on Ionic pages and navigation.
//  */
// @IonicPage()
// @Component({
//   selector: 'page-product',
//   templateUrl: 'product.html',
// })
// export class ProductPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
    
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad Product');
//   }

// }


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'product.html'
})
export class ProductPage {

  constructor(public navCtrl: NavController) {

  }

}
