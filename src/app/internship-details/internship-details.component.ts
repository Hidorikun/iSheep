import { Component, OnInit, Input } from '@angular/core';
import { FirebaseCrudService } from 'app/services/firebase-crud.service';
import { Internship } from 'app/model/internship';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.component.html',
  styleUrls: ['./internship-details.component.scss']
})
export class InternshipDetailsComponent implements OnInit {
  @Input() internship: Internship;

  constructor(private firebaseService: FirebaseCrudService<Internship>,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getInternship();
  }

  getInternship(): void {
    let id = this.route.snapshot.params['id'];
    this.firebaseService.getEntity('internships',id)
      .subscribe(e=> this.internship =e); 
  } 

}
