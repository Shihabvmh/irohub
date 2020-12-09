import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-exp-java',
  templateUrl: './admin-live-exp-java.component.html',
  styleUrls: ['./admin-live-exp-java.component.css']
})
export class AdminLiveExpJavaComponent implements OnInit {
  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
