import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-beginner-android',
  templateUrl: './admin-live-beginner-android.component.html',
  styleUrls: ['./admin-live-beginner-android.component.css']
})
export class AdminLiveBeginnerAndroidComponent implements OnInit {

  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
