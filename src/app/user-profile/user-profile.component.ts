import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FirebaseCrudService} from "../services/firebase-crud.service";
import {Student} from "../model/student";
import {University} from "../model/university";
import {Company} from "../model/company";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;
  userSource: any;
  userType: string;

  constructor(
      private authService: AuthService,
      private studentService: FirebaseCrudService<Student>,
      private universityService: FirebaseCrudService<University>,
      private companyService: FirebaseCrudService<Company>) { }

  ngOnInit() {
    this.authService.getUser().subscribe(
        user => {
            this.userType = user.displayName;
          if (this.isUniversity()){
            this.userSource = this.universityService.getEntityById('universities', user.uid);
          } else if (this.isStudent()) {
            this.userSource = this.studentService.getEntityById('students', user.uid);
          } else if (this.isCompany()) {
            this.userSource = this.companyService.getEntityById('companies', user.uid);
          }

          this.userSource.subscribe(user => this.user = user);
        });

  }

    isCompany() {
      return this.userType == 'company'
    }

    isStudent() {
      return this.userType == 'student';
    }

    isUniversity() {
      return this.userType == 'university';
    }

    save() {

    }
}
