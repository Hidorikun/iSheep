import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, PathReference} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCrudService<T> {
  listFirebase: AngularFireList<T>;
  constructor(private firebaseDb: AngularFireDatabase) { }

  getList(collection: PathReference) {
    this.listFirebase = this.firebaseDb.list(collection);
    return this.listFirebase;
  }

  addEntity(colcollection: PathReference, entity: T) {
    this.listFirebase.push(entity)
  }

  removeEntity(colcollection: PathReference, $key: string) {
    this.listFirebase.remove($key)
  }
}
