import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

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
  password= 'bules';
  address= '';
  city= '';
  country= '';
  public email= 'asdf@asdf.com';
  secondPassword= '';
  universityName= '';
  facultyName= '';
  postalCode= '';
  companyName= '';

   constructor(
      public authService: AuthService,
      private notificationService: NotificationService
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
    console.log('registering...', this.email, this.password);
    console.log(this.email);
    console.log(this.password);

    this.authService.doRegister(this.email, this.password).then(
        userCredentials => {
            this.notificationService.showSuccessNotification('Successfully registered!', 'bottom', 'right');
            userCredentials.user.updateProfile({displayName: this.userType});
        },
        err => this.notificationService.showErrorNotification(err, 'top', 'center')
    )
  }
}
