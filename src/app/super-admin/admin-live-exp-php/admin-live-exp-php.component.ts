import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-exp-php',
  templateUrl: './admin-live-exp-php.component.html',
  styleUrls: ['./admin-live-exp-php.component.css']
})
export class AdminLiveExpPhpComponent implements OnInit {
  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
