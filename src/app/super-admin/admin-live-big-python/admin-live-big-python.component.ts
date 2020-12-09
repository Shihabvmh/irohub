import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-big-python',
  templateUrl: './admin-live-big-python.component.html',
  styleUrls: ['./admin-live-big-python.component.css']
})
export class AdminLiveBigPythonComponent implements OnInit {
  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
