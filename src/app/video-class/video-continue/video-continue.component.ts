import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-continue',
  templateUrl: './video-continue.component.html',
  styleUrls: ['./video-continue.component.css']
})
export class VideoContinueComponent implements OnInit {

  showMe:boolean=false

  constructor(config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
    
  }


  ngOnInit(): void {
  }

  toggleTag()
  {
    this.showMe=!this.showMe
  }
}
