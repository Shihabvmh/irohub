import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-header-sidebar',
  templateUrl: './video-header-sidebar.component.html',
  styleUrls: ['./video-header-sidebar.component.css']
})
export class VideoHeaderSidebarComponent implements OnInit {

  constructor() { }
  
  opened= false;
  ngOnInit(): void {
  }

}
