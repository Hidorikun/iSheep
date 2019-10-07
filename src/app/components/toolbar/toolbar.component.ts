import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../auth/login.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  user: firebase.User;

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.loginService.getLoggedInUser()
      .subscribe(user => {
        this.user = user;
      })
  }

  logout() {
    this.loginService.logout();
  }

}