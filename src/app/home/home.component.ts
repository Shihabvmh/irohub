import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup} from '@angular/forms';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {

  constructor(config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }
contactusForm = new FormGroup({



})

  ngOnInit(): void {
  }

}
