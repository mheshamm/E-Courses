import { CourseComponent } from './../courses/components/course/course.component';
import { CoursesAppModule } from './../courses/app.module';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { UiModule } from 'src/app/Ui.module';
import { AdminCoursesComponent } from './components/admin-courses/admin-courses/admin-courses.component';
import { CommAppModule } from '../comm/app.module';
import { AlertDeleteComponent } from '../comm/components/alert-delete/alert-delete.component';



@NgModule({
  declarations: [
    
  AdminCoursesComponent],
  imports: [
    UiModule,
    CommonModule,
    CoursesAppModule,
    CommAppModule
    
    
  ],
  entryComponents:[CourseComponent , AlertDeleteComponent],
  exports:[AdminCoursesComponent],
  providers: [],
  bootstrap: []
})
export class AdminAppModule { }
