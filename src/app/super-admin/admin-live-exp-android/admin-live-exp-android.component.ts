import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-exp-android',
  templateUrl: './admin-live-exp-android.component.html',
  styleUrls: ['./admin-live-exp-android.component.css']
})
export class AdminLiveExpAndroidComponent implements OnInit {
  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
