import { CoursesService } from './../../../courses/services/courses.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ShoppingcartService } from 'src/app/modules/shopping-list/services/shoppingcart.service';
import { Subject, Subscription } from 'rxjs';
import firebase from 'firebase/app';
import { LoginService } from 'src/app/modules/auth/services/login.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit , OnDestroy{
  isLoading=true;
  courses = []
  searched = []
  allCourses = []
  scCourses = []
  sub : Subscription
  isTyping = false
  selectedCourses = []
  not : boolean
  user : firebase.User;
  
  
  
  


  constructor(private coursesService : CoursesService , private cart : ShoppingcartService  , private login : LoginService) {
    
   }
  ngOnDestroy(): void {
    
  }

  ngOnInit() {
    this.coursesService.getAllCourses().subscribe(courses=>{
      this.allCourses = courses
      
      let CoursesRev = courses.reverse()
      let cou = CoursesRev.slice(0,4)
      this.courses = cou

      let select = this.shuffle(courses)
      this.selectedCourses = select.slice(0,4)
      console.log(this.selectedCourses)
      
      this.isLoading=false;
      console.log(this.courses)
      this.sub = this.cart.getCourseFromCart().subscribe(c=> this.scCourses = c)

    })
    
    this.login.getUser().subscribe(user=>{this.user = user})
    
    
  }
  search($event){
    let query = $event.target.value ;
    
    
    
    if(query && query!==""){
      this.not = true
      this.isTyping = true
      
      this.searched=this.allCourses.filter(c=>
        c.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      console.log(this.searched)
      
      
    }
    else {
      this.searched=[]
      this.not = false
    }

    

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
  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
}
