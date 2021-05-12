import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  constructor( private db: AngularFireDatabase) { }
  async AddToCart(course){
    let cartId = localStorage.getItem("cartId")
    if(!cartId){
      let cart = await this.db.list("/shoppingCart").push({
        dateCreated : new Date().getTime()
      })
      localStorage.setItem("cartId",cart.key)
      this.addCourseCart(cart.key , course )
    }
    else {
      this.addCourseCart(localStorage.getItem("cartId") , course )
    }

  }
  addCourseCart(idCart , courseAdded){
    this.db.object("/shoppingCart/"+idCart+"/items/"+courseAdded.key).snapshotChanges().pipe(
      take(1)).subscribe(courseCart=>{
        console.log(courseCart)
        if(!courseCart.key){
          this.db.list("/shoppingCart/"+idCart+"/items/").set(courseAdded.key , {course:courseAdded})
        }
      })
    
  }
  getCourseFromCart(){
    let cartId = localStorage.getItem("cartId")
    return this.db.list("/shoppingCart/"+cartId+"/items/").snapshotChanges().pipe(
      map(course=>course.map(c=>(
        {key : c.payload.key , ...c.payload.val() as any }
      )))
    )
  }
  DeleteCourse(id:string){
    let cartId = localStorage.getItem("cartId")
    return this.db.object("/shoppingCart/"+cartId+"/items/"+id).remove()
  }
  getAllCoursesFromCart(){
    let cartId = localStorage.getItem("cartId")
    return this.db.list("/shoppingCart/"+cartId+"/items/").snapshotChanges().pipe(
      map(course=>course.map(c=>(
        {key : c.payload.key , ...(c.payload.val()as any).course }
      )))
    )
  }
  clearCart(){
    let cartId = localStorage.getItem("cartId")
    return this.db.object("/shoppingCart/"+cartId+"/items/").remove()
  }
}
