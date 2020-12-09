import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-admin-live-big-android-view-module',
  templateUrl: './admin-live-big-android-view-module.component.html',
  styleUrls: ['./admin-live-big-android-view-module.component.css']
})
export class AdminLiveBigAndroidViewModuleComponent implements OnInit {


  addFiles= new FormGroup({
    uploadPdf: new FormControl(''),
    uploadVideo: new FormControl(''),
    uploadDocument: new FormControl(''),

  });
  constructor() { }

  ngOnInit(): void {
  }

}
