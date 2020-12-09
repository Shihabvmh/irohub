import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-placement',
  templateUrl: './admin-placement.component.html',
  styleUrls: ['./admin-placement.component.css']
})
export class AdminPlacementComponent implements OnInit {


  addPlacements = new FormGroup({
    companyName: new FormControl(''),
    companyLogo: new FormControl(''),
    jobRole: new FormControl(''),
    location: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    dueDate: new FormControl(''),
  });
 
  return: any;
  constructor() { }
 
  ngOnInit(): void {
  }
onSubmit (){
  this.return.value
} 
}
