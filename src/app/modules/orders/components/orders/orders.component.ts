import { map, mergeMap } from 'rxjs/operators';
import { PaymentComponent } from './../../../payment/components/payment/payment.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { PaymentService } from 'src/app/modules/payment/services/payment.service';
import { ShoppingcartService } from 'src/app/modules/shopping-list/services/shoppingcart.service';
import { OrdersService } from '../../services/orders.service';
import firebase from 'firebase';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  courses : any[]  = []
  user;
  isLoading = true
  Myorders : any[]  = []

  constructor( private cart : ShoppingcartService , private router : Router ,
     private login : LoginService , private orders : OrdersService , private payment : PaymentService , private servicedialog : MatDialog) { }

  ngOnInit() {
    this.cart.getAllCoursesFromCart().pipe(
      mergeMap(carts=>this.login.getCurrentUser().pipe(
        mergeMap(user=>this.orders.getAllOrders().pipe(
          map(orders=>[carts,user,orders])
        ))
      ))
    ).subscribe(([carts,user,orders])=>{
      this.isLoading=false
      console.log(carts , user , orders)
      this.courses = carts
      this.user = user
      this.Myorders = orders
      console.log(this.courses , this.user , this.Myorders)

    })
    
    
    
  }
  total(){
    let total = 0
    this.courses.forEach(course=>{
      total = total + course.price
    })
    return total
  }
  
  async pay(){
    let order = {
      dateCreated : new Date().getTime(),
      userId : this.user.id,
      items : this.courses ,
      total : this.total(),
      paid : false 
    }
    let orderCheck = await this.orders.order(order);
    this.payment.payment(orderCheck.key , this.total())
    this.cart.clearCart()
    this.servicedialog.open(PaymentComponent, {width:"300px"})
    setTimeout(()=>{
      this.servicedialog.closeAll()
      this.router.navigate(["/"])
    }, 3000)



  }
  cancel(){
    this.router.navigate(["/courses"])
  }

}
