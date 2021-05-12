import { CoursesService } from './../../services/courses.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/modules/comm/services/categories.service';
import { Subscription } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { ShoppingcartService } from 'src/app/modules/shopping-list/services/shoppingcart.service';
import { UsersService } from 'src/app/modules/users/services/users.service';
import { LoginService } from 'src/app/modules/auth/services/login.service';


import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit , OnDestroy {
  categories:any = []
  courses : any = []
  sub : Subscription ;
  corsub : Subscription;
  isLoading = true  
  scCourses : any[]= []
  user : firebase.User ;

  constructor( private categoriesService : CategoriesService ,
     private coursesSevice : CoursesService ,
      private cart : ShoppingcartService , private loginservice : LoginService , private router : Router) { }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
    
  }

  ngOnInit() {
    this.sub=this.categoriesService.getAllCategories()
                        .pipe(
                          mergeMap(categories=>this.coursesSevice.getAllCourses().pipe(
                            mergeMap(courses=>this.cart.getCourseFromCart().pipe(
                            map(scCourses=>[categories,courses,scCourses])))
                          ))).subscribe(([categories,courses,scCourses])=>{
                            this.categories=categories;
                            this.courses=courses;
                            this.scCourses=scCourses;
                            this.isLoading = false
                            console.log('courseShopping :'+scCourses);
                          });

    this.loginservice.getUser().subscribe(user=>{this.user = user
      console.log(user)
    })
                                                 
  }
  getCourseByCategory(key){
    return this.courses.filter(course => course.category==key)
  }
  addToCart(course){
    this.cart.AddToCart(course)
  }
  isCourseExist(key){
    return this.scCourses.find((course:any)=>course.key==key)
  }
  DeleteCourse(course){
    this.cart.DeleteCourse(course.key)
  }
  ongo(){
    this.router.navigate(["/login"])
  }

}
