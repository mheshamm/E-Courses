import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { map } from 'rxjs/operators';
import { Course } from '../models/Course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor( private db : AngularFireDatabase) { }
  

  getAllCourses(){
    return this.db.list('/courses')
                 .snapshotChanges()
                 .pipe(
                  map(changes =>
                    changes.map(c => (
                      { 
                        key: c.payload.key, ...c.payload.val() as any
                      }
                      ))
                 )
                 )
  }
  addCourse(course : Course ){
    return this.db.list('/courses/').push({
      category : course.category,
      title : course.title ,
      description : course.description , 
      price : course.price ,
      urlImg : course.urlImg 
    } 
    )
  }
  getCourse(uid:string){
    return this.db.object('/courses/'+uid).snapshotChanges().pipe(
      map(course=>{
        console.log(course)
        let obj:any = course.payload.val()
        console.log(obj) 
        let courseObj : Course = {
          id : course.key ,
          category : obj.category ,
          title : obj.title ,
          description : obj.description ,
          price : obj.price,
          urlImg : obj.urlImg,
        }
        return courseObj
      })
    )
  }
  updateCourse(course:Course){
    return this.db.object('/courses/'+course.id).update({
      title:course.title,
      category : course.category,
      description : course.description,
      price : course.price,
      urlImg : course.urlImg
    })
  }
  deleteCourse(id:string)
   {
     return this.db.object('/courses/'+id).remove().catch((err)=>{
      
      console.log(err)
    })
   }

   
   

   }
   




