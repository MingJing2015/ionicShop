import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import { DataService }      from '../../app/services/data-service.service';
import { ProductDataService }      from '../../app/services/dataService';

@Component({
  templateUrl: 'page-details.html',
})

export class myFoodNavigationDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}

// <ion-header>
//   <ion-navbar>
//     <ion-title>Food Navigation</ion-title>
//   </ion-navbar>
// </ion-header>

@Component({
  template: `


<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Food</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <ion-list>

   <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item.subItems)" icon-left>
      <ion-icon [name]="'logo-' + item.icon" [ngStyle]="{'color': item.color}" item-left></ion-icon>
      {{ item.title }}
    </button>

  </ion-list>
</ion-content>
`
})


export class Food {
  //items   = [];

items = [
                        { title: 'Drinks', icon: 'angular', color: '#E63135',
                        subItems: [
                            { title: 'Coffee', icon: 'css3', color: '#F46529'},
                            { title: 'Tea', icon: 'html5', color: '#FFD439'} ] },

                        { title: 'Dinner', icon: 'javascript', color: '#CE6296',
                        subItems: [
                            { title: 'Fruit', icon: 'sass', color: '#78BD43'},
                            { title: 'Vegetables', icon: 'nodejs', color: '#3575AC'},
                            { title: 'Dessert', icon: 'python', color: '#412159'} ]   
                        }
                    ];  


  //constructor(public nav: NavController, private dataService: ProductDataService) {
  constructor(public nav: NavController) {
   
    //this.items = dataService.getFoodsFromLocal();
  }

  openNavDetailsPage(item) {
    console.log(item);
    this.nav.push(myFoodNavigationDetailsPage, { item: item });
  }
}
