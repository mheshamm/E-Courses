import { CourseComponent } from './../../../../courses/components/course/course.component';
import { CoursesService } from './../../../../courses/services/courses.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertDeleteComponent } from 'src/app/modules/comm/components/alert-delete/alert-delete.component';

@Component({
  selector: 'app-admin-courses',
  templateUrl: './admin-courses.component.html',
  styleUrls: ['./admin-courses.component.css']
})
export class AdminCoursesComponent implements OnInit {
  courses : any[] = []
  displayedColumns : string [] = ["title" , "description" , "price" , "category" , "urlImg" , "actions" ]
  isLoading = true  


  constructor(private courseSer : CoursesService , private servicedialog : MatDialog) { }

  ngOnInit() {
    this.courseSer.getAllCourses().subscribe(courses => {
      this.courses=courses
      this.isLoading = false 
    })
  }
  addCourse(){
    this.servicedialog.open(CourseComponent , {width:"600px"})

  }
  onEdit(row){
    console.log(row)
    this.servicedialog.open(CourseComponent , {width:"600px" , data : {id:row.key}})
  }
  Edit(key){
    
    this.servicedialog.open(CourseComponent , {width:"600px" , data : {id:key}})

  }
  Delete(key){
    
    this.servicedialog.open(AlertDeleteComponent , {width:"600px" , data : {id:key}})

  }
  onDelete(row){
    this.servicedialog.open(AlertDeleteComponent , {width:"600px" , data : {id:row.key}})
    

  }

}
