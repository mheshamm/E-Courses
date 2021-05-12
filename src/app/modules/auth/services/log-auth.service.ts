
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import {  CanActivate, Router } from '@angular/router';
import {map, switchMap} from 'rxjs/operators'

import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { UsersService } from '../../users/services/users.service';


@Injectable({
  providedIn: 'root'
})
export class LogAuthService implements CanActivate {

  constructor( private log : AngularFireAuth , private router : Router , private users : UsersService) {
    this.log.authState.subscribe(user => {
      console.log(user)
      this.users.saveUsers(user)
      
    })
    
   }
  canActivate():Observable<boolean>{
    return this.log.authState.pipe(
      map(user=>{
        if(user==null){
          
          
          return true
          
        }
        else {
          this.router.navigate(['/'])
        return false
          
        }
        
        
          
        
      }))
  }
  
  
  
}


