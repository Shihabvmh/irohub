import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-course',
  templateUrl: './video-course.component.html',
  styleUrls: ['./video-course.component.css']
})
export class VideoCourseComponent implements OnInit {

  
  constructor(config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
    
  }

  ngOnInit(): void {
  }

}
