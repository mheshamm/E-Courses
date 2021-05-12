import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UiModule } from 'src/app/Ui.module';
import { PaymentComponent } from './components/payment/payment.component';




@NgModule({
  declarations: [
    
  PaymentComponent],
  imports: [
      UiModule,
      AppRoutingModule ,
      CommonModule
    
    
  ],
  exports : [PaymentComponent],
  providers: [],
  bootstrap: []
})
export class PaymentAppModule { }
