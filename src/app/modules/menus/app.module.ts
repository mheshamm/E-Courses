
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { UiModule } from 'src/app/Ui.module';

import { BrowserModule } from '@angular/platform-browser';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    
  
    
  SideNavComponent],
  imports: [
      UiModule,
      AppRoutingModule,
      BrowserModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule
    
    
  ],
  exports : [SideNavComponent],
  providers: [],
  bootstrap: []
})
export class MenusAppModule { }
