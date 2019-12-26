import { Component, OnInit } from '@angular/core';
import {FirebaseCrudService} from '../firebase-crud/firebase-crud.service';
import {element} from 'protractor';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss'],
  providers: [FirebaseCrudService]
})
export class InternshipComponent implements OnInit {
  internships: Internship[];
  constructor(private firebaseService: FirebaseCrudService<Internship>) { }

  ngOnInit() {
    this.firebaseService.getList('internships').snapshotChanges().subscribe( data => {
      this.internships = data.map(e => {
        return {
          id: e.payload.key,
          title: e.payload.toJSON()['title'],
          company: e.payload.toJSON['company']
        } as Internship;
      })
    });
  }

}
