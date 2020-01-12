import {  Component, OnInit, Input } from '@angular/core';
import { Company } from '../model/company';
import { FirebaseCrudService } from "../services/firebase-crud.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NewInternshipDialogComponent } from 'app/dialogs/new-internship-dialog/new-internship-dialog.component';
import { MatDialog } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { Internship } from 'app/model/internship';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  @Input() company: Company;
  internshipForm;
  constructor(private firebaseService: FirebaseCrudService<Company>,
    private firebaseServiceInternship: FirebaseCrudService<Internship>,
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog
    ) { this.internshipForm = this.formBuilder.group({
      title: '',
      description: ''
    });}

  ngOnInit() {
    this.getCompany();
  }

  getCompany(): void {
    let id = this.route.snapshot.params['id'];
    this.firebaseService.getEntity('companies',id)
      .subscribe(e=> this.company = e); 
        
  } 

  
  
  newInternship(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    console.log(customerData.title + ' ' + customerData.description);
    this.firebaseServiceInternship.addEntity('internships', new Internship({title: customerData.title, description: customerData.description}));
    this.internshipForm.reset();
    this.router.navigate(['/dashboard'])
  }

  openDialog(): void {
    this.firebaseServiceInternship.addEntity('internships', new Internship({title: "id test",id: "ter"}));
    const dialogRef = this.dialog.open(NewInternshipDialogComponent, {
      height: '80%', 
      width: '2000px',
      data : new Internship({company: new Company()})
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }

  
}
 