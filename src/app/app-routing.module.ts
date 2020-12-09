import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentComponent } from './live-class/assignment/assignment.component';
import { DashboardComponent } from './live-class/dashboard/dashboard.component';
import { QuizComponent } from './live-class/quiz/quiz.component';
import { QuizAttendComponent } from './live-class/quiz-attend/quiz-attend.component';
import { VideoAssignmentComponent }from'./video-class/video-assignment/video-assignment.component';
import { VideoCourseComponent } from './video-class/video-course/video-course.component';
import { VideoActivityComponent } from './video-class/video-activity/video-activity.component';
import { VideoContinueComponent } from './video-class/video-continue/video-continue.component';
import { VideoPlacementComponent } from './video-class/video-placement/video-placement.component';
import { VideoGraduationComponent } from './video-class/video-graduation/video-graduation.component';
import { VideoPackComponent } from './video-class/video-pack/video-pack.component';
import { VideoPackUpgradeComponent } from './video-class/video-pack-upgrade/video-pack-upgrade.component';
import { VideoConsultComponent } from './video-class/video-consult/video-consult.component';
import { VideoDashboardComponent } from './video-class/video-dashboard/video-dashboard.component';
import { VideoQuizComponent } from './video-class/video-quiz/video-quiz.component';
import { VideoAttendQuizComponent } from './video-class/video-attend-quiz/video-attend-quiz.component';
import { VideoPlayVideoComponent } from './video-class/video-play-video/video-play-video.component';
import { VideoProfileComponent } from './video-class/video-profile/video-profile.component';
import { VideoRestPasswordComponent } from './video-class/video-rest-password/video-rest-password.component';
import { AdminDashboardComponent } from './super-admin/admin-dashboard/admin-dashboard.component';
import { AdminPlacementComponent } from './super-admin/admin-placement/admin-placement.component';
import { AdminProcessedIdeasComponent } from './super-admin/admin-processed-ideas/admin-processed-ideas.component';
import { AdminBatchManagementComponent } from './super-admin/admin-batch-management/admin-batch-management.component';
import { AdminBatchTimetableComponent } from './super-admin/admin-batch-timetable/admin-batch-timetable.component';
import { AdminGraduationComponent } from './super-admin/admin-graduation/admin-graduation.component';
import { AdminProjectIdeasComponent } from './super-admin/admin-project-ideas/admin-project-ideas.component';
import { AdminCoursesComponent } from './super-admin/admin-courses/admin-courses.component';
import { AdminCourseLiveCategoryComponent } from './super-admin/admin-course-live-category/admin-course-live-category.component';
import { AdminLiveBeginnerCoursesComponent } from './super-admin/admin-live-beginner-courses/admin-live-beginner-courses.component';
import { AdminLiveBeginnerAndroidComponent } from './super-admin/admin-live-beginner-android/admin-live-beginner-android.component';
import { AdminLiveInterCoursesComponent } from './super-admin/admin-live-inter-courses/admin-live-inter-courses.component';
import { AdminLiveExpCoursesComponent } from './super-admin/admin-live-exp-courses/admin-live-exp-courses.component';
import { AdminLiveBigIosComponent } from './super-admin/admin-live-big-ios/admin-live-big-ios.component';
import { AdminLiveBigPhpComponent } from './super-admin/admin-live-big-php/admin-live-big-php.component';
import { AdminLiveBigPythonComponent } from './super-admin/admin-live-big-python/admin-live-big-python.component';
import { AdminLiveBigJavaComponent } from './super-admin/admin-live-big-java/admin-live-big-java.component';
import { AdminLiveBigAndroidViewModuleComponent } from './super-admin/admin-live-big-android-view-module/admin-live-big-android-view-module.component';
import { AdminLiveInterAndroidComponent } from './super-admin/admin-live-inter-android/admin-live-inter-android.component';
import { AdminLiveInterIosComponent } from './super-admin/admin-live-inter-ios/admin-live-inter-ios.component';
import { AdminLiveInterPythonComponent } from './super-admin/admin-live-inter-python/admin-live-inter-python.component';
import { AdminLiveInterJavaComponent } from './super-admin/admin-live-inter-java/admin-live-inter-java.component';
import { AdminLiveExpAndroidComponent } from './super-admin/admin-live-exp-android/admin-live-exp-android.component';
import { AdminLiveExpIosComponent } from './super-admin/admin-live-exp-ios/admin-live-exp-ios.component';
import { AdminLiveExpPhpComponent } from './super-admin/admin-live-exp-php/admin-live-exp-php.component';
import { AdminLiveExpPythonComponent } from './super-admin/admin-live-exp-python/admin-live-exp-python.component';
import { AdminLiveExpJavaComponent } from './super-admin/admin-live-exp-java/admin-live-exp-java.component';
import { AdminLiveInterPhpComponent } from './super-admin/admin-live-inter-php/admin-live-inter-php.component';



const routes: Routes = [
  { path:'live-dash' , component: DashboardComponent },
{ path: 'assignment', component: AssignmentComponent},
{ path: 'quiz',component: QuizComponent},
{ path: 'attend', component:QuizAttendComponent},
{ path: 'video-dashboard',component:VideoDashboardComponent},
{ path:'video-assignment',component:VideoAssignmentComponent},
{ path: 'video-course',component:VideoCourseComponent},
{ path:'video-activity',component:VideoActivityComponent},
{ path:'video-continue',component:VideoContinueComponent},
{ path: 'video-placement',component:VideoPlacementComponent},
{ path: 'video-graduation',component:VideoGraduationComponent},
{ path: 'video-pack',component:VideoPackComponent},
{ path: 'vide-packupgrade',component:VideoPackUpgradeComponent},
{ path: 'video-consult',component:VideoConsultComponent},
{ path: 'video-quiz',component:VideoQuizComponent},
{ path: 'video-attend-quiz',component:VideoAttendQuizComponent},
{ path: 'play-video',component:VideoPlayVideoComponent},
{ path: 'video-profile',component:VideoProfileComponent},
{ path: 'video-resetpassword',component:VideoRestPasswordComponent},
{ path: 'admin-dashboard',component:AdminDashboardComponent},
{ path: 'admin-placement',component:AdminPlacementComponent},
{ path: 'admin-proced',component:AdminProcessedIdeasComponent},
{ path: 'admin-batch-magement',component:AdminBatchManagementComponent},
{ path: 'time-table',component:AdminBatchTimetableComponent},
{ path: 'admin-graduation',component:AdminGraduationComponent},
{ path: 'admin-project-ideas',component: AdminProjectIdeasComponent},
{ path:'admin-courses',component:AdminCoursesComponent},
{ path:'admin-course-live',component:AdminCourseLiveCategoryComponent},
{ path:'admin-live-beginner',component:AdminLiveBeginnerCoursesComponent},
{ path: 'admin-live-android',component:AdminLiveBeginnerAndroidComponent},
{ path: 'admin-live-inter-course',component:AdminLiveInterCoursesComponent},
{ path: 'admin-live-exp-course',component:AdminLiveExpCoursesComponent},
{ path: 'admin-live-big-ios',component:AdminLiveBigIosComponent},
{ path: 'admin-live-big-php',component:AdminLiveBigPhpComponent},
{ path: 'admin-live-big-python',component:AdminLiveBigPythonComponent},
{ path: 'admin-live-big-java',component:AdminLiveBigJavaComponent},
{ path: 'live-android-view-module',component:AdminLiveBigAndroidViewModuleComponent},
{ path: 'live-inter-android',component:AdminLiveInterAndroidComponent},
{ path: 'live-inter-ios',component:AdminLiveInterIosComponent},
{ path: 'live-inter-php',component:AdminLiveInterPhpComponent},
{ path: 'live-inter-python',component:AdminLiveInterPythonComponent},
{ path: 'live-inter-java',component:AdminLiveInterJavaComponent},
{ path: 'live-exp-android',component:AdminLiveExpAndroidComponent},
{ path: 'live-exp-ios',component:AdminLiveExpIosComponent},
{ path: 'live-exp-php',component:AdminLiveExpPhpComponent},
{ path: 'live-exp-python',component:AdminLiveExpPythonComponent},
{ path: 'live-exp-java',component:AdminLiveExpJavaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
