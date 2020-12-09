import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-inter-java',
  templateUrl: './admin-live-inter-java.component.html',
  styleUrls: ['./admin-live-inter-java.component.css']
})
export class AdminLiveInterJavaComponent implements OnInit {
  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
