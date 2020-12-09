import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-inter-php',
  templateUrl: './admin-live-inter-php.component.html',
  styleUrls: ['./admin-live-inter-php.component.css']
})
export class AdminLiveInterPhpComponent implements OnInit {
  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
