import { Component, ViewChild } from '@angular/core';
import { Nav, Platform }        from 'ionic-angular';
import { StatusBar }            from '@ionic-native/status-bar';
import { SplashScreen }         from '@ionic-native/splash-screen';

import { HomePage }             from '../pages/home/home';
import { ListPage }             from '../pages/list/list';

import { ProductPage }          from '../pages/product/product';
import { Food }                 from '../pages/food/food';
import { ActionSheetPage }      from '../pages/actionsheet/actionsheet';
import { GoodsPage }            from '../pages/goods/goods';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

// make HomePage the root (or first) page
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home page', component: HomePage },
      { title: 'List page', component: ListPage },
      { title: 'API Product page', component: ProductPage },
      { title: 'Food page', component: Food },
      { title: 'ActionSheet page', component: ActionSheetPage },
      { title: 'Goods page', component: GoodsPage }

      
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
