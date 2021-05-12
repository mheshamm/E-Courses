
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UiModule } from 'src/app/Ui.module';

import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    
  ],
  imports: [
      UiModule,
      AppRoutingModule,
      BrowserModule
    
    
  ],
  exports : [],
  providers: [],
  bootstrap: []
})
export class UsersAppModule { }
