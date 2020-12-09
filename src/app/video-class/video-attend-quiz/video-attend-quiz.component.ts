import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-attend-quiz',
  templateUrl: './video-attend-quiz.component.html',
  styleUrls: ['./video-attend-quiz.component.css']
})
export class VideoAttendQuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  quantity:number=0;
  i=0
  plus(){
    if(this.i !=25){
      this.i++;
      this.quantity=this.i;
    }
  }

}
