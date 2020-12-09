import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-exp-python',
  templateUrl: './admin-live-exp-python.component.html',
  styleUrls: ['./admin-live-exp-python.component.css']
})
export class AdminLiveExpPythonComponent implements OnInit {
  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
