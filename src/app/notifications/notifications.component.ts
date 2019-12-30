import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

  showNotification(form, align) {
    this.notificationService.showSuccessNotification("This is a notification template", form, align);
    this.notificationService.showErrorNotification("This is a notification template", form, align);
    this.notificationService.showWarningNotification("This is a notification template", form, align);
    this.notificationService.showInfoNotification("This is a notification template", form, align);
  }
}
