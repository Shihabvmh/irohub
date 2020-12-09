import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { DescriptionComponent } from './description/description.component';

import { ServicesComponent } from './services/services.component';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { LiveClassModule } from './live-class/live-class.module';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';   
import { CarouselModule } from 'ngx-owl-carousel-o';
import { VideoClassModule } from './video-class/video-class.module';
import { MaterialsModule } from './materials/materials.module';
import { SuperAdminModule } from './super-admin/super-admin.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseComponent,
    DescriptionComponent,
    ServicesComponent
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule,  
    LiveClassModule,
    NgbModule,
    NgbRatingModule,
    CarouselModule,
    VideoClassModule,
    MaterialsModule,
    SuperAdminModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
