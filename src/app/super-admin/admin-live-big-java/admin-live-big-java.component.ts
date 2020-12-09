import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-big-java',
  templateUrl: './admin-live-big-java.component.html',
  styleUrls: ['./admin-live-big-java.component.css']
})
export class AdminLiveBigJavaComponent implements OnInit {
  addModule= new FormGroup({
    moduleName: new FormControl(''),
    moduleFile: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
