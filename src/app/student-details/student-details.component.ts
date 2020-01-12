import { Component, OnInit, Input } from '@angular/core';
import { FirebaseCrudService } from 'app/services/firebase-crud.service';
import { Student } from 'app/model/student';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  @Input() student: Student;

  constructor(private firebaseService: FirebaseCrudService<Student>,
    private route: ActivatedRoute,
    private location: Location) {}

  ngOnInit() { 
    this.getStudent(); 
  }

  getStudent(): void {
    let id = this.route.snapshot.params['id'];
    this.firebaseService.getEntity('students',id)
      .subscribe(e=> this.student =e); 
  } 

}
