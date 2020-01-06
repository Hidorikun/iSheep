import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {InternshipInterface} from '../../model/internship';

@Component({
  selector: 'app-new-internship-dialog',
  templateUrl: './new-internship-dialog.component.html',
  styleUrls: ['./new-internship-dialog.component.scss']
})
export class NewInternshipDialogComponent{

  constructor(
      public dialogRef: MatDialogRef<NewInternshipDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: InternshipInterface
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
