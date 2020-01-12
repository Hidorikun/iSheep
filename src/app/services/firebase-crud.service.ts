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

  addEntityWithId(collection: PathReference, id: any, entity: T) {
    this.firebaseDb.list(collection).set(id, entity)
  }

  addEntity(collection: PathReference, entity: T) : string{
    return this.firebaseDb.list(collection).push(entity).key
  }

  removeEntity(collection: PathReference, key: string) {
    this.firebaseDb.list(collection).remove(key);
  }
  getEntityById(collection: PathReference, id: string): Observable<any> {
    return this.firebaseDb.object(collection + '/' + id).valueChanges()
  }
}
