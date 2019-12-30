import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: '';
  password: '';

  constructor(
    public authService: AuthService,
    private notificationService: NotificationService){}

  ngOnInit() {
  }

  login() {
   this.authService.doLogin(this.email, this.password).then(
        () => this.notificationService.showSuccessNotification('Successfully autenthicated!', 'bottom', 'right'),
        err => this.notificationService.showErrorNotification(err, 'top', 'center')
    );
   this.authService.getUser().subscribe(user => console.log(user));
  }
}
