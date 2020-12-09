import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { MatIconModule} from '@angular/material/icon';
import { AssignmentComponent } from './assignment/assignment.component';
import { AppRoutingModule } from '../app-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { QuizAttendComponent } from './quiz-attend/quiz-attend.component';
import { PlacementDeskComponent } from './placement-desk/placement-desk.component';
import { GraduationComponent } from './graduation/graduation.component';
import { ConsultFacultyComponent } from './consult-faculty/consult-faculty.component';
import { OwlDateTimeModule, 
  OwlNativeDateTimeModule,} from 'ng-pick-datetime';
  import { CarouselModule } from 'ngx-owl-carousel-o';
import { StudyMaterialComponent } from './study-material/study-material.component';
import { MaterialsModule } from '../materials/materials.module';
// import {MatListModule} from '@angular/material/list';

// import { MatInputModule} from'@angular/material/input';
// import { MatNativeDateModule }from '../../../node_modules/@angular/material';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { MatFormFieldModule } from '../../../node_modules/@angular/material/form-field';
// import { MatNativeDateModule } from '../../../node_modules/@angular/material/core';
// import { NgbModule, NgbDatepicker  } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
// import { MatDatepickerModule }from '../../../node_modules/@angular/material/datepicker';
// import {MatDatepickerModule }from '@angular/material/datepicker';
@NgModule({
  declarations: [DashboardComponent, AssignmentComponent, QuizComponent,
     QuizAttendComponent,PlacementDeskComponent, GraduationComponent,ConsultFacultyComponent, StudyMaterialComponent ],
  imports: [
    CommonModule,
    // MatIconModule,
    AppRoutingModule,
    OwlDateTimeModule, 
         OwlNativeDateTimeModule,
         CarouselModule,
         MaterialsModule
        //  MatListModule
    // CarouselModule  
    // MatDatepickerModule,
    //  MatInputModule,  
    // FormsModule,
    // ReactiveFormsModule
    // MatNativeDateModule,
    // MatFormFieldModule,
    // MatNativeDateModule,
    // MatDatepickerModule
    // NgbModule,
    // NgbDatepicker
  
  
  ],
  exports:[
    DashboardComponent,
    AssignmentComponent,
    QuizComponent,
    QuizAttendComponent,
    PlacementDeskComponent,
    GraduationComponent,
    ConsultFacultyComponent,
    StudyMaterialComponent

   
  ],
  

})
export class LiveClassModule { }
