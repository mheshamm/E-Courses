import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { map, mergeMap } from 'rxjs/operators';
import { CategoriesService } from 'src/app/modules/comm/services/categories.service';
import { Course } from '../../models/Course.model';
import { CoursesService } from '../../services/courses.service';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  forma : FormGroup ;
  categories : any[] = []
  course : Course
  isAdded = false ;
  isLoading = false
  

  constructor( private fb : FormBuilder , private cat : CategoriesService ,
     private coursesService : CoursesService ,
      private dialogRef : MatDialogRef<CoursesComponent>,@Inject(MAT_DIALOG_DATA) public idCourse ) {
        this.initCourse(null)

   }

  ngOnInit() {
    if(!this.idCourse){

      console.log(this.idCourse)
      this.cat.getAllCategories().subscribe(categories => this.categories=categories)
      console.log(this.categories)
    } else {
      console.log(this.idCourse)
      this.cat.getAllCategories().pipe(
        mergeMap(categories=>{
          return this.coursesService.getCourse(this.idCourse.id).pipe(
            map(course => {
              return ([categories, course]);
            })
          );
        })
      ).subscribe(([categories,course])=>{
        this.categories = categories as any []
        this.course = course as Course
        this.initCourse(this.course)

      })

    }

  }

  initCourse(course){
    this.forma = this.fb.group({
      "Category" : [course?course.category:null , Validators.required] ,
      "Title" : [course?course.title:null , Validators.required] ,
      "Description" : [course?course.description:null , Validators.required] ,
      "Price" : [course?course.price:null , Validators.required] , 
      "UrlImg" : [course?course.urlImg:null , Validators.required] ,

    })
  }
  onSubmit(form){
    
      console.log(form)
      console.log(form.Category)
      if(this.forma.valid){
        let course:Course = {
          id : this.idCourse?this.idCourse.id:'' ,
          category : form.Category,
          title : form.Title , 
          description : form.Description ,
          price : form.Price ,
          urlImg : form.UrlImg 
        }
        if(!this.idCourse){

          this.coursesService.addCourse(course).then(()=>{
            if(!this.coursesService.addCourse){
              this.isLoading=true 
            }
            this.isAdded=true
            setTimeout(()=>{
              
              this.dialogRef.close()
            } , 1000)
          })
        }
        else {
          this.coursesService.updateCourse(course).then(()=>{
            if(!this.coursesService.updateCourse){
              this.isLoading=true 
            }
            this.isAdded=true
            setTimeout(()=>{
              
              this.dialogRef.close()
            } , 1000)
          }

          )
        }

       
      }
      
  }

}
