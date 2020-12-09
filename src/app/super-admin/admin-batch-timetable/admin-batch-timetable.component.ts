import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-batch-timetable',
  templateUrl: './admin-batch-timetable.component.html',
  styleUrls: ['./admin-batch-timetable.component.css']
})
export class AdminBatchTimetableComponent implements OnInit {
  reschedule= new FormGroup({
    date: new FormControl(''),
    batchName: new FormControl(''),

  });
 
  constructor() { }

  ngOnInit(): void {
  }

}
