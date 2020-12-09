import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-attend',
  templateUrl: './quiz-attend.component.html',
  styleUrls: ['./quiz-attend.component.css']
})
export class QuizAttendComponent implements OnInit {

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
