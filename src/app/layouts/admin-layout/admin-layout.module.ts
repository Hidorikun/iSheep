import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { RegisterComponent } from '../../user-profile/register/register.component';
import { LoginComponent } from '../../user-profile/login/login.component';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';
import { AuthGuard } from '../../guards/auth.guard';

import {
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import {InternshipComponent} from '../../internship/internship.component';
import {NewInternshipDialogComponent} from '../../dialogs/new-internship-dialog/new-internship-dialog.component';
import {StudentsListComponent} from "../../students/students-list/students-list.component";
import {CompaniesComponent} from "../../companies/companies.component";
import {CompanyComponent} from "../../company/company.component";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule
  ],
  declarations: [
    DashboardComponent,
    InternshipComponent,
    UserProfileComponent,
    TableListComponent,
    RegisterComponent,
    LoginComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    NewInternshipDialogComponent,
    StudentsListComponent,
    CompaniesComponent,
    CompanyComponent
  ],
  entryComponents: [
    NewInternshipDialogComponent
  ],
   providers: [AuthService, NotificationService, AuthGuard],
})

export class AdminLayoutModule {}

const routes: Routes = [
  { path: 'detail/:id', component: CompanyComponent },
];