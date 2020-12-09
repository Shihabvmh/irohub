import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-exp-courses',
  templateUrl: './admin-live-exp-courses.component.html',
  styleUrls: ['./admin-live-exp-courses.component.css']
})
export class AdminLiveExpCoursesComponent implements OnInit {
  addCourse= new FormGroup({
    title: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
