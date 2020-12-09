import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-beginner-courses',
  templateUrl: './admin-live-beginner-courses.component.html',
  styleUrls: ['./admin-live-beginner-courses.component.css']
})
export class AdminLiveBeginnerCoursesComponent implements OnInit {

  addCourse= new FormGroup({
    title: new FormControl(''),
    logo: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
