import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-inter-android',
  templateUrl: './admin-live-inter-android.component.html',
  styleUrls: ['./admin-live-inter-android.component.css']
})
export class AdminLiveInterAndroidComponent implements OnInit {
  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
