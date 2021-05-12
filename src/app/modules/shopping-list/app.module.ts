

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from 'src/app/Ui.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [  
    
  ShoppingCartComponent],
  imports: [
    UiModule,
    
    BrowserModule,
    
    
    
  ],
  providers: [],
  bootstrap: []
})
export class ShoppingListAppModule { }
