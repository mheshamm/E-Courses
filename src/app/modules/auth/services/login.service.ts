import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import {  CanActivate, Router } from '@angular/router';
import {map, switchMap} from 'rxjs/operators'

import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { UsersService } from '../../users/services/users.service';
import { ShoppingcartService } from '../../shopping-list/services/shoppingcart.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {

  constructor( private log : AngularFireAuth , 
    private router : Router , private users : UsersService ) {
    this.log.authState.subscribe(user => {
      console.log(user)
      this.users.saveUsers(user)
      
    })
    
   }
  canActivate():Observable<boolean>{
    return this.log.authState.pipe(
      map(user=>{
        if(user){
          
          return true
        }
        else {
          this.router.navigate(['/login'])
          return false
        }
        
        
          
        
      }))
  }
  
  googleLogin(){
    return this.log.signInWithPopup(new firebase.auth.GoogleAuthProvider)
  }
  googleLogout(){
    
    return this.log.signOut()
    
  }
  getUser(){
    console.log(this.log.authState)
    return this.log.authState ;
  }
  getCurrentUser(){
    return this.log.authState.pipe( 
      switchMap(user=>
        { 
        return this.users.getUserByUid(user.uid)
      }),
      map(user=>{
        return user
      })
    )
  }
  
}


