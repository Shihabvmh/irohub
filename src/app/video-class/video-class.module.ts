import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoHeaderSidebarComponent } from './video-header-sidebar/video-header-sidebar.component';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import {PopoverModule} from "ngx-smart-popover";
import { MaterialsModule } from '../materials/materials.module';
import { VideoAssignmentComponent } from './video-assignment/video-assignment.component';
import { VideoQuizComponent } from './video-quiz/video-quiz.component';
import { VideoAttendQuizComponent } from './video-attend-quiz/video-attend-quiz.component';
import { VideoCourseComponent } from './video-course/video-course.component';
import { VideoPlacementComponent } from './video-placement/video-placement.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { VideoContinueComponent } from './video-continue/video-continue.component';
import { CarouselModule } from '../../../node_modules/ngx-owl-carousel-o';
import { VideoGraduationComponent } from './video-graduation/video-graduation.component';
import { VideoPackComponent } from './video-pack/video-pack.component';
import { VideoPackUpgradeComponent } from './video-pack-upgrade/video-pack-upgrade.component';
import { VideoConsultComponent } from './video-consult/video-consult.component';
import { VideoPlayVideoComponent } from './video-play-video/video-play-video.component';
import { VideoProfileComponent } from './video-profile/video-profile.component';
import { VideoRestPasswordComponent } from './video-rest-password/video-rest-password.component';




@NgModule({
  declarations: [VideoHeaderSidebarComponent, VideoDashboardComponent, VideoAssignmentComponent, 
    VideoQuizComponent, VideoAttendQuizComponent, VideoCourseComponent, VideoPlacementComponent,
     VideoContinueComponent, VideoGraduationComponent, VideoPackComponent, VideoPackUpgradeComponent,
      VideoConsultComponent,
      VideoPlayVideoComponent,
      VideoProfileComponent,
      VideoRestPasswordComponent],
  imports: [
    CommonModule,
    PopoverModule,
    MaterialsModule,
    AppRoutingModule,
    NgbRatingModule,
    CarouselModule
  ],
  exports:[
    VideoHeaderSidebarComponent,VideoDashboardComponent,
    VideoPackComponent,VideoPackUpgradeComponent,VideoContinueComponent,VideoDashboardComponent,
    VideoQuizComponent,VideoAttendQuizComponent,VideoPlayVideoComponent
  ]
})
export class VideoClassModule { }
