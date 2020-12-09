import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '../../../../node_modules/@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-video-pack-upgrade',
  templateUrl: './video-pack-upgrade.component.html',
  styleUrls: ['./video-pack-upgrade.component.css']
})
export class VideoPackUpgradeComponent implements OnInit {

  
  constructor(config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
  }

}
