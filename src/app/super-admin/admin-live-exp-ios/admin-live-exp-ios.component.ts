import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-exp-ios',
  templateUrl: './admin-live-exp-ios.component.html',
  styleUrls: ['./admin-live-exp-ios.component.css']
})
export class AdminLiveExpIosComponent implements OnInit {
  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
