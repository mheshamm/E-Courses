import { ShoppingcartService } from 'src/app/modules/shopping-list/services/shoppingcart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  courses : any[] = []

  constructor( private cart : ShoppingcartService , private router : Router) { }

  ngOnInit() {
    this.cart.getAllCoursesFromCart().subscribe(courses => this.courses = courses)
    
  }
  total(){
    let total = 0
    this.courses.forEach(course=>{
      total = total + course.price
    })
    return total
  }
  delete(key){
    this.cart.DeleteCourse(key)
  }
  next(){
    this.router.navigate(["/orders"])
  }

}
