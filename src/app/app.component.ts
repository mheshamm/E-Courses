import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private dp : AngularFireDatabase){}
  ngOnInit() {
    this.dp.list('/courses').valueChanges().subscribe(course => console.log(course))
  }
  title = 'e-course';
}
