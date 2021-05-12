import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { UiModule } from 'src/app/Ui.module';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AlertDeleteComponent } from './components/alert-delete/alert-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';







@NgModule({
  declarations: [
    
  HomeComponent,
    
  AboutComponent,
    
  LoadingSpinnerComponent,
    
  AlertDeleteComponent,
    
  FooterComponent],
  imports: [
    CommonModule , UiModule , NgbModule , FormsModule
    
    
  ],
  exports:[LoadingSpinnerComponent],
  providers: [],
  bootstrap: []
})
export class CommAppModule { }
