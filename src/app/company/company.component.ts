import {  Component, OnInit, Input } from '@angular/core';
import { Company } from '../model/company';
import { FirebaseCrudService } from "../services/firebase-crud.service";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  @Input() company: Company;

  constructor(private firebaseService: FirebaseCrudService<Company>,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getCompany();
  }

  getCompany(): void {
    let id = this.route.snapshot.params['id'];
    this.firebaseService.getEntityById('companies', id)
      .subscribe(e=> this.company =e);
  }
}
 