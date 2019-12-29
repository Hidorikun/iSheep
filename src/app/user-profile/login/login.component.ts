import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: '';
  password: '';

  constructor(public authService: AuthService){}

  ngOnInit() {
  }

  login() {
   this.authService.doLogin(this.email, this.password);
   this.authService.getUser().subscribe(user => console.log(user));
  }
}
