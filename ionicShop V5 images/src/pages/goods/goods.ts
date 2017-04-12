import { Component } from '@angular/core';
import { Platform, ActionSheetController } from 'ionic-angular';
import { ProductDataService }      from '../../app/services/dataService';

@Component({
  templateUrl: 'goods.html'
})
export class GoodsPage {

    items = [];
    authToken:string;
    private myProducts: Array<any>;
  
  constructor(
    public platform: Platform,
    private productDataService: ProductDataService,
    public actionsheetCtrl: ActionSheetController
  ) { }

  ngOnInit(): void {
    
        this.getProducts();

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

  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}