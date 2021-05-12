import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private dp : AngularFireDatabase) { }
  saveUsers(user : firebase.User){
    if(!user) return ;
    this.dp.object("/users/"+user.uid).update(
      {
        name : user.displayName ,
        email : user.email
      }
    )
  }
  getUserByUid(uid:string){
   return  this.dp.object("/users/"+uid).snapshotChanges().pipe(
      map(user => {
        let objUser:any = user.payload.val()
        objUser.id = user.payload.key
        return objUser
      })
    )

  }
}
