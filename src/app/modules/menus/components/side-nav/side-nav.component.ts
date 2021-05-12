import { ShoppingcartService } from './../../../shopping-list/services/shoppingcart.service';
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, mergeMap, shareReplay, switchMap } from 'rxjs/operators';
import { OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/auth/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit{
  user: any ;
  CartNo : number = 0
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result=>result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver , private login : LoginService , 
    private router : Router , private shoppingcart : ShoppingcartService  ) {}
  ngOnInit() {
    this.login.getUser().pipe(
      switchMap(user=>{
        if(!user) return 'e'
        return this.login.getCurrentUser()
      }),
      mergeMap(user=>this.shoppingcart.getCourseFromCart().pipe(
        map(courseCart => {
          return [user , courseCart]
        })
      ))
    )
    .subscribe(([user, courseCart])=>{
      if(user!='e') {
        this.user = user
        this.CartNo = (courseCart as any[]).length
      }
      else {
        this.user = null
      }
    })
  }
  LogOut(){
    this.shoppingcart.clearCart()
    this.login.googleLogout();
    
    this.router.navigate(["/"])
    

  }
  goToCart(){
    if(this.CartNo==0) return ;
    this.router.navigate(["/cart"])
  }
  

}
