import { ShoppingCartComponent } from './modules/shopping-list/components/shopping-cart/shopping-cart.component';
import { CourseResolverService } from './modules/courses/services/course-resolver.service';
import { AdminService } from './modules/admin/services/admin.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCoursesComponent } from './modules/admin/components/admin-courses/admin-courses/admin-courses.component';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { LoginService } from './modules/auth/services/login.service';
import { AboutComponent } from './modules/comm/components/about/about.component';
import { HomeComponent } from './modules/comm/components/home/home.component';
import { CoursesComponent } from './modules/courses/components/courses/courses.component';
import { OrdersComponent } from './modules/orders/components/orders/orders.component';
import { LogAuthService } from './modules/auth/services/log-auth.service';

const routes: Routes = [
  {path: "" , component:HomeComponent },
  {path:"courses" , component:CoursesComponent},
  {path:'about' , component:AboutComponent},
  {path:"login" , component:LoginComponent , canActivate:[LogAuthService]},
  {path:"orders" , component:OrdersComponent , canActivate:[LoginService]},
  {path:"admin-courses" , component:AdminCoursesComponent , canActivate:[LoginService , AdminService] },
  {path:"cart" , component:ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
