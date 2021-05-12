import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from '../../auth/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService implements CanActivate {

  constructor(private log : LoginService , private router : Router) { }
  canActivate():Observable<boolean> {
    return this.log.getCurrentUser().pipe(map(user =>{
      if(user.isAdmin){
        
        return true 
      }
      else {
        this.router.navigate(['/'])
        return false
      }
    }))
  }
}
