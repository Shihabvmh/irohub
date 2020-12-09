import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-big-ios',
  templateUrl: './admin-live-big-ios.component.html',
  styleUrls: ['./admin-live-big-ios.component.css']
})
export class AdminLiveBigIosComponent implements OnInit {
  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
