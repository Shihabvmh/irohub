import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-batch-management',
  templateUrl: './admin-batch-management.component.html',
  styleUrls: ['./admin-batch-management.component.css']
})
export class AdminBatchManagementComponent implements OnInit {

  addBatch= new FormGroup({
    batchName: new FormControl(''),
    date: new FormControl(''),
    numberOfWeek: new FormControl(''),
    Course: new FormControl(''),
    category: new FormControl(''),
    faculty: new FormControl(''),
    startTime: new FormControl(''),
    endTime: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
