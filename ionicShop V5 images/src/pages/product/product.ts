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




// Good : 

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDataService }      from '../../app/services/dataService';

// --------------------  export class ProductNavDetailsPage  -------------------
@Component({
  templateUrl: 'page-details.html',
})
export class ProductNavDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}


// //@IonicPage()
// @Component({
//    // selector: 'product',
//     templateUrl: 'product.html',
// })

@Component({
 //templateUrl: 'product.html',

  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Product Page</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <ion-list>

   <button ion-item *ngFor="let item of myProducts" (click)="openNavDetailsPage(item)" icon-left>
      <ion-icon [name]="'logo-' + item.icon" [ngStyle]="{'color': item.color}" item-left></ion-icon>
      {{ item.goods_name}}
    </button>

  </ion-list>
</ion-content>
`
})

export class ProductPage {

  items = [];
  authToken:string;
  private myProducts: Array<any>;

  constructor(public nav: NavController, private productDataService: ProductDataService) {

  }

  ngOnInit(): void {
    
     this.getProducts();

    //this.items = productDataService.getFoodsFromLocal();

    console.log(this.items);
  }


private getProducts() {


      this.productDataService.getProducts(this.authToken)
      // Subscribe to observable.
        .subscribe(

            // Success.
            data => {
                console.log(data);
                //this.myProducts = data.sort(data.cat_id);
                this.myProducts = data;
            },
            // Error.
            error => {
                alert(error)
            },
            // Final instructions.
            () => {
                console.log("Finished")
            });
    }


    // #######
  openNavDetailsPage(item) {
    console.log(item);
    this.nav.push(ProductNavDetailsPage, { item: item });
  }
}


// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { ProductDataService }      from '../../app/services/dataService';


// @Component({
//   templateUrl: 'page-details.html',
// })
// export class ProductNavDetailsPage {
//   item;

//   constructor(params: NavParams) {
//     this.item = params.data.item;
//   }
// }

// @Component({
//   template: `
// <ion-header>
//   <ion-navbar>
//     <ion-title>Food Navigation</ion-title>
//   </ion-navbar>
// </ion-header>

// <ion-content>
//   <ion-list>

//    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item.subItems)" icon-left>
//       <ion-icon [name]="'logo-' + item.icon" [ngStyle]="{'color': item.color}" item-left></ion-icon>
//       {{ item.title }}
//     </button>

//   </ion-list>
// </ion-content>
// `
// })


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
// //   items   = [];
// //   constructor(public navCtrl: NavController, public navParams: NavParams) {
// //   }
// //   ionViewDidLoad() {
// //     console.log('ionViewDidLoad Product');
// //   }
// // }
// //export class Food {
  
//   //items   = [];

//         items = [
//                         { title: 'Drinks', icon: 'angular', color: '#E63135',
//                         subItems: [
//                             { title: 'Coffee', icon: 'css3', color: '#F46529'},
//                             { title: 'Tea', icon: 'html5', color: '#FFD439'} ] },

//                         { title: 'Dinner', icon: 'javascript', color: '#CE6296',
//                         subItems: [
//                             { title: 'Fruit', icon: 'sass', color: '#78BD43'},
//                             { title: 'Vegetables', icon: 'nodejs', color: '#3575AC'},
//                             { title: 'Dessert', icon: 'python', color: '#412159'} ]   
//                         }
//                     ];   

//   constructor(public nav: NavController, private productDataService: ProductDataService) {
   
//     console.log("Product   constructor");
//     //this.items = productDataService.getProducts();
//     //this.items = productDataService.getFoodsFromLocal();

//   }

//   openNavDetailsPage(item) {
//     console.log(item);
//     this.nav.push(ProductNavDetailsPage, { item: item });
//   }
// }
