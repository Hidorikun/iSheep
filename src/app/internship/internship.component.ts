import { Component, OnInit } from '@angular/core';
import {FirebaseCrudService} from '../services/firebase-crud.service';
import {element} from 'protractor';
import { FormBuilder } from '@angular/forms';
import {Internship} from '../model/internship';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss'],
  providers: [FirebaseCrudService]
})
export class InternshipComponent implements OnInit {
  internships: Internship[];
  internshipForm;
  constructor(private firebaseService: FirebaseCrudService<Internship>, private formBuilder: FormBuilder) {
    this.internshipForm = this.formBuilder.group({
      title: '',
      description: ''
    });
  }

  ngOnInit() {
    this.firebaseService.getList('internships').snapshotChanges().subscribe( data => {
      this.internships = data.map(e => {
        return {
          id: e.payload.key,
          title: e.payload.toJSON()['title'],
          description: e.payload.toJSON()['description']
        } as Internship;
      })
    });
  }

  newInternship(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    console.log(customerData.title + ' ' + customerData.description);
    this.firebaseService.addEntity('internships', new Internship({title: customerData.title, description: customerData.description}))
    this.internshipForm.reset();
  }
}
