import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderSidebarComponent } from './admin-header-sidebar/admin-header-sidebar.component';
import { MaterialsModule } from '../materials/materials.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProjectIdeasComponent } from './admin-project-ideas/admin-project-ideas.component';
import { AdminPlacementComponent } from './admin-placement/admin-placement.component';
import { AdminProcessedIdeasComponent } from './admin-processed-ideas/admin-processed-ideas.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule,FormsModule }from '@angular/forms';
import { AdminBatchManagementComponent } from './admin-batch-management/admin-batch-management.component';
import { AdminBatchTimetableComponent } from './admin-batch-timetable/admin-batch-timetable.component';
import { AdminGraduationComponent } from './admin-graduation/admin-graduation.component';
import { AdminCoursesComponent } from './admin-courses/admin-courses.component';
import { AdminCourseLiveCategoryComponent } from './admin-course-live-category/admin-course-live-category.component';
import { AdminLiveBeginnerCoursesComponent } from './admin-live-beginner-courses/admin-live-beginner-courses.component';
import { AdminLiveBeginnerAndroidComponent } from './admin-live-beginner-android/admin-live-beginner-android.component';
import { AdminLiveBigIosComponent } from './admin-live-big-ios/admin-live-big-ios.component';
import { AdminLiveBigPhpComponent } from './admin-live-big-php/admin-live-big-php.component';
import { AdminLiveBigPythonComponent } from './admin-live-big-python/admin-live-big-python.component';
import { AdminLiveBigJavaComponent } from './admin-live-big-java/admin-live-big-java.component';
import { AdminLiveInterAndroidComponent } from './admin-live-inter-android/admin-live-inter-android.component';
import { AdminLiveInterIosComponent } from './admin-live-inter-ios/admin-live-inter-ios.component';
import { AdminLiveInterPhpComponent } from './admin-live-inter-php/admin-live-inter-php.component';
import { AdminLiveInterPythonComponent } from './admin-live-inter-python/admin-live-inter-python.component';
import { AdminLiveInterJavaComponent } from './admin-live-inter-java/admin-live-inter-java.component';
import { AdminLiveExpAndroidComponent } from './admin-live-exp-android/admin-live-exp-android.component';
import { AdminLiveExpIosComponent } from './admin-live-exp-ios/admin-live-exp-ios.component';
import { AdminLiveExpPhpComponent } from './admin-live-exp-php/admin-live-exp-php.component';
import { AdminLiveExpPythonComponent } from './admin-live-exp-python/admin-live-exp-python.component';
import { AdminLiveExpJavaComponent } from './admin-live-exp-java/admin-live-exp-java.component';
import { AdminLiveInterCoursesComponent } from './admin-live-inter-courses/admin-live-inter-courses.component';
import { AdminLiveExpCoursesComponent } from './admin-live-exp-courses/admin-live-exp-courses.component';
import { AdminLiveBigAndroidViewModuleComponent } from './admin-live-big-android-view-module/admin-live-big-android-view-module.component';



@NgModule({
  declarations: [AdminHeaderSidebarComponent, AdminDashboardComponent,
     AdminProjectIdeasComponent, AdminPlacementComponent, AdminProcessedIdeasComponent, 
     AdminBatchManagementComponent, AdminBatchTimetableComponent, AdminGraduationComponent, 
     AdminCoursesComponent, AdminCourseLiveCategoryComponent, AdminLiveBeginnerCoursesComponent,
       AdminLiveBeginnerAndroidComponent,
       AdminLiveBigIosComponent,
       AdminLiveBigPhpComponent,
       AdminLiveBigPythonComponent,
       AdminLiveBigJavaComponent,
       AdminLiveInterAndroidComponent,
       AdminLiveInterIosComponent,
       AdminLiveInterPhpComponent,
       AdminLiveInterPythonComponent,
       AdminLiveInterJavaComponent,
       AdminLiveExpAndroidComponent,
       AdminLiveExpIosComponent,
       AdminLiveExpPhpComponent,
       AdminLiveExpPythonComponent,
       AdminLiveExpJavaComponent,
       AdminLiveInterCoursesComponent,
       AdminLiveExpCoursesComponent,
       AdminLiveBigAndroidViewModuleComponent, ],
  imports: [
    CommonModule,
    MaterialsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule 
  ],
  exports:[
    AdminHeaderSidebarComponent,AdminDashboardComponent,AdminProjectIdeasComponent,
    AdminPlacementComponent,AdminProcessedIdeasComponent,AdminBatchManagementComponent,
    AdminBatchTimetableComponent,AdminGraduationComponent, AdminCoursesComponent,AdminLiveBeginnerAndroidComponent,
    AdminLiveBigIosComponent
  ]
})
export class SuperAdminModule { }
