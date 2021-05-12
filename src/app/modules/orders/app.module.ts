import { LoadingSpinnerComponent } from './../comm/components/loading-spinner/loading-spinner.component';
import { PaymentAppModule } from './../payment/app.module';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UiModule } from 'src/app/Ui.module';
import { OrdersComponent } from './components/orders/orders.component';
import { PaymentComponent } from '../payment/components/payment/payment.component';
import { CommAppModule } from '../comm/app.module';



@NgModule({
  declarations: [
    
  OrdersComponent],
  imports: [
      UiModule,
      AppRoutingModule ,
      CommonModule, 
      PaymentAppModule,
      CommAppModule
      
    
    
  ],
  entryComponents:[PaymentComponent , LoadingSpinnerComponent],
  exports : [OrdersComponent],
  providers: [],
  bootstrap: []
})
export class OrdersAppModule { }
