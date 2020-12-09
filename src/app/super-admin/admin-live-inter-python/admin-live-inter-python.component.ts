import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-inter-python',
  templateUrl: './admin-live-inter-python.component.html',
  styleUrls: ['./admin-live-inter-python.component.css']
})
export class AdminLiveInterPythonComponent implements OnInit {
  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
