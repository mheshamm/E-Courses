import { CommAppModule } from './../comm/app.module';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from 'src/app/Ui.module';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseComponent } from './components/course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
  CoursesComponent,
    
  CourseComponent],
  imports: [
      UiModule,
      CommonModule,
      CommAppModule,
      ReactiveFormsModule,
      FormsModule
    
    
  ],
  exports:[CourseComponent],
  providers: [],
  bootstrap: []
})
export class CoursesAppModule { }
