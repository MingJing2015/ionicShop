import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Food } from './food';

@NgModule({
  declarations: [
    Food,
  ],
  imports: [
    IonicModule.forRoot(Food),
  ],
  exports: [
    Food
  ]
})
export class FoodModule {}
