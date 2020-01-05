import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authenticated = false;

  constructor(public afAuth: AngularFireAuth){}

  doRegister(email: string, password: string){
     return new Promise<any>((resolve, reject) => {
       firebase.auth().createUserWithEmailAndPassword(email, password)
       .then(res => {
         resolve(res);
       }, err => reject(err))
     })
   }

  doLogin(email: string, password: string){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        res => { resolve(res); this.authenticated = true },
        err => { reject(err); this.authenticated = false }
      );
    })
  }

  getUser(): any {
    return this.afAuth.user;
  }

}
