import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  myDate =Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
