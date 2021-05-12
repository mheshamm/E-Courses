import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
  payment(orderId:string , amount:number){
    return true 
  }
}
