import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProductPage }         from '../pages/product/product';
import {ProductNavDetailsPage} from '../pages/product/product';
import { Food }                        from '../pages/food/food';
import { myFoodNavigationDetailsPage } from '../pages/food/food';

import { ProductDataService }      from './services/dataService';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    Food,
    myFoodNavigationDetailsPage, 
    ProductNavDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    Food,
    myFoodNavigationDetailsPage, 
    ProductNavDetailsPage
  ],
  providers: [
    StatusBar,
    ProductDataService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
