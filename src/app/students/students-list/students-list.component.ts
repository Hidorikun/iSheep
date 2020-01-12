import { Component, OnInit } from '@angular/core';
import {Student} from "../../model/student";
import {FirebaseCrudService} from "../../services/firebase-crud.service";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students: Student[];

  constructor(
      private firebaseService: FirebaseCrudService<Student>
  ) { }

  ngOnInit() {
    this.firebaseService.getList('students').snapshotChanges().subscribe( data => {
      this.students = data.map(e => {

        let data = e.payload.toJSON();
        return {
          id: e.payload.key,
          username: data['username'],
          email: data['email'],
          firstName: data['firstName'],
          lastName: data['lastName'],
        } as Student;
      })
    });
  }
}
