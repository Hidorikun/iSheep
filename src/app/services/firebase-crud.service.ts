import { Injectable } from '@angular/core';
import {AngularFireDatabase, PathReference} from '@angular/fire/database';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FirebaseCrudService<T> {
  constructor(private firebaseDb: AngularFireDatabase) {}

   
  
  getList(collection: PathReference) {
    return this.firebaseDb.list(collection);
  }

  addEntity(collection: PathReference, entity: T) : string{
    return this.firebaseDb.list(collection).push(entity).key
  }

  removeEntity(collection: PathReference, $key: string) {
    this.firebaseDb.list(collection).remove($key)
  }

  getCompany(id: string):Observable<any> {
    return this.firebaseDb.object('companies/' + id).valueChanges();
  }

}
