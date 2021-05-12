import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : firebase.User ;
  isLoading = false

  constructor( private logServ : LoginService , private router : Router) { }

  ngOnInit() {
    this.logServ.getUser().subscribe(user=>{
      this.user=user;
      if(user){

        this.router.navigate(["/"])
      }
      console.log(user)
    })
  }
  onLogIn(){
    this.logServ.googleLogin();
    console.log(this.user)
    this.isLoading = true 
    

      
    
    
  }
  
  

}
