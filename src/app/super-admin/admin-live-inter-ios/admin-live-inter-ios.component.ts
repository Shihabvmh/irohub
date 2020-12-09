import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-inter-ios',
  templateUrl: './admin-live-inter-ios.component.html',
  styleUrls: ['./admin-live-inter-ios.component.css']
})
export class AdminLiveInterIosComponent implements OnInit {
  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
