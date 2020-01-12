import { Component, OnInit } from '@angular/core';
import { Company } from "../model/company"
import { FirebaseCrudService } from "../services/firebase-crud.service";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  companies: Company[];
  selectedCompany: Company;
  constructor(
    private firebaseService: FirebaseCrudService<Company>
  ) { }

  onSelect(company: Company): void {
    this.selectedCompany = company;
  }

  deleteCompany(id: string){
    console.log(id)
    this.firebaseService.removeEntity('companies',id);
  }

 

  ngOnInit() {
    this.firebaseService.getList('companies').snapshotChanges().subscribe( data => {
      this.companies = data.map(e => {

        let data = e.payload.toJSON();
        return {
          id: e.payload.key,
          name: data['name'],
          email: data['email'],
          username: data['username'],
          address: data['address'],
          city: data['city'],
          postalCode: data['postalcode'],
          country: data['country']
        } as Company;
      })
    });
  }


}
