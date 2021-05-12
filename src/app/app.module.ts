
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire'
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule } from '@angular/fire/auth'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment'
import { UiModule } from './Ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminAppModule } from './modules/admin/app.module';
import { CoursesAppModule } from './modules/courses/app.module';
import { AuthAppModule } from './modules/auth/app.module';
import { MenusAppModule } from './modules/menus/app.module';
import { CommAppModule } from './modules/comm/app.module';
import { OrdersAppModule } from './modules/orders/app.module';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsersAppModule } from './modules/users/app.module';
import { ShoppingListAppModule } from './modules/shopping-list/app.module';
import { PaymentAppModule } from './modules/payment/app.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    UiModule,
    AdminAppModule,
    CoursesAppModule,
    AuthAppModule,
    MenusAppModule,
    CommAppModule,
    OrdersAppModule,
    UsersAppModule,
    ShoppingListAppModule,
    PaymentAppModule,
    

    


  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
