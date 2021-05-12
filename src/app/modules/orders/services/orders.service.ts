import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor( private db : AngularFireDatabase) { }
  order(order){
    return this.db.list("/orders/").push(order)
  }
  getAllOrders(){
    return this.db.list("/orders/").snapshotChanges().pipe(
      map(orders=>orders.map(c=>(
        {key : c.payload.key , ...c.payload.val()as any }
      )))
    )
  }
}
