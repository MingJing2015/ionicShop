import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ProductPage } from './product';

@NgModule({
  declarations: [
    ProductPage,
  ],
  imports: [
    IonicModule.forRoot(ProductPage),
  ],
  exports: [
    ProductPage
  ]
})
export class ProductModule {}
