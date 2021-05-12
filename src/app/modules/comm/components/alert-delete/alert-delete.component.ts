import { CoursesService } from './../../../courses/services/courses.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdminCoursesComponent } from 'src/app/modules/admin/components/admin-courses/admin-courses/admin-courses.component';

@Component({
  selector: 'app-alert-delete',
  templateUrl: './alert-delete.component.html',
  styleUrls: ['./alert-delete.component.css']
})
export class AlertDeleteComponent implements OnInit {
  isLoading = false
  isDeleted = false

  constructor(private coursesServ : CoursesService , @Inject(MAT_DIALOG_DATA) public idCourse , private dialogRef : MatDialogRef<AdminCoursesComponent>) { }

  ngOnInit() {
    console.log(this.idCourse.id)
  }
  Del(){
    
     this.coursesServ.deleteCourse(this.idCourse.id).then(()=>{
      console.log(this.idCourse.id)
      
      this.isDeleted=true
      setTimeout(()=>{
        
        this.dialogRef.close()
      } , 1000)
    }).catch((err)=>{
      this.isLoading=true 
      console.log(err)
    })
    
  }
  cancel(){
    this.dialogRef.close()
  }

}
function err(err: any) {
  throw new Error('Function not implemented.');
}

