import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-pack',
  templateUrl: './video-pack.component.html',
  styleUrls: ['./video-pack.component.css']
})
export class VideoPackComponent implements OnInit {


  constructor(config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }


  ngOnInit(): void {
  }

}
