import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Course } from '../models/Course.model';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolverService implements Resolve<any> {

  constructor(private courseServ : CoursesService) { }
  resolve( route : ActivatedRouteSnapshot , state : RouterStateSnapshot){
        
        
    return this.courseServ.getAllCourses()
}
}
