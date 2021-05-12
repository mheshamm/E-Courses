import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor( private dp : AngularFireDatabase) { }

  getAllCategories(){
    return this.dp.list('categories').snapshotChanges().pipe(
      map(change => change.map(c=>(
        // take key and extact it's data
        {key:c.payload.key , ...c.payload.val() as {}}
        )))
    )
  }
}
