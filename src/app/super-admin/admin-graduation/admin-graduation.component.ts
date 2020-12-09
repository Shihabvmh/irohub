import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-graduation',
  templateUrl: './admin-graduation.component.html',
  styleUrls: ['./admin-graduation.component.css']
})
export class AdminGraduationComponent implements OnInit {

  graduation= new FormGroup({
    title: new FormControl(''),
    message: new FormControl(''),
    courseType: new FormControl(''),
    Course: new FormControl(''),
    students: new FormControl(''),
    place: new FormControl(''),
    time: new FormControl(''),
    date: new FormControl(''),
    date2: new FormControl(''),
  }); 
  constructor() { }

  ngOnInit(): void {
  }

}
