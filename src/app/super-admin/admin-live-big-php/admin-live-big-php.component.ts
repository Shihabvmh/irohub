import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-big-php',
  templateUrl: './admin-live-big-php.component.html',
  styleUrls: ['./admin-live-big-php.component.css']
})
export class AdminLiveBigPhpComponent implements OnInit {
  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
