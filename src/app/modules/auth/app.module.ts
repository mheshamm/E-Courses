import { CommAppModule } from './../comm/app.module';

import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from 'src/app/Ui.module';

import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [  
    
  LoginComponent],
  imports: [
    UiModule,
    AngularFireAuthModule,
    BrowserModule,
    CommAppModule
    
  ],
  providers: [],
  bootstrap: []
})
export class AuthAppModule { }
