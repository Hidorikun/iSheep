import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import {Student} from "../../model/student";
import {University} from "../../model/university";
import {Company} from "../../model/company";
import {FirebaseCrudService} from "../../services/firebase-crud.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userType = 'student';
  firstName= '';
  lastName= '';
  username= '';
  password= '';
  address= '';
  city= '';
  country= '';
  email= '';
  secondPassword= '';
  universityName= '';
  facultyName= '';
  postalCode= '';
  companyName= '';

   constructor(
      private authService: AuthService,
      private notificationService: NotificationService,
      private companyService: FirebaseCrudService<Company>,
      private universityService: FirebaseCrudService<University>,
      private studentService: FirebaseCrudService<Student>
   ){}

  ngOnInit() {
  }

  public isStudent(): boolean {
    return this.userType === 'student';
  }

  public isUniversity(): boolean {
    return this.userType === 'university';
  }

  public isCompany(): boolean {
    return this.userType === 'company';
  }

  public register() {
    this.authService.doRegister(this.email, this.password).then(
        userCredentials => {
            this.notificationService.showSuccessNotification('Successfully registered!', 'bottom', 'right');
            let key: string;
            if (this.userType == 'student') {
                key = this.addStudent();
            } else if(this.userType == 'company') {
                key = this.addCompany();
            } else if(this.userType == 'university') {
                key =this.addUniversity();
            }
            userCredentials.user.updateProfile({displayName: key});
        },
        err => this.notificationService.showErrorNotification(err, 'top', 'center')
    )
  }

    private addStudent(): string{
        return this.studentService.addEntity('students', {
            username: this.username,
            email: this.email,
            firstName: this.firstName,
            lastName: this.lastName
        } as Student)
    }

    private addCompany(): string  {
        return this.companyService.addEntity('companies', {
            name: this.companyName,
            email: this.email,
            username: this.username,
            address: this.address,
            city: this.city,
            postalCode: this.postalCode,
            country: this.country,
        } as Company)
    }

    private addUniversity(): string{
        return this.universityService.addEntity('universities', {
                username: this.username,
                address: this.address,
                email: this.email,
                city: this.city,
                postalCode: this.postalCode,
                country: this.country,
                universityName: this.universityName,
                facultyName: this.facultyName,
        } as University)
    }
}
