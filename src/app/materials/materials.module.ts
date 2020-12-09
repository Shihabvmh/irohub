import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '../../../node_modules/@angular/material/form-field';

const MaterialComponents = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatSliderModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatListModule,
  MatDialogModule,
  MatDatepickerModule,
 
  MatFormFieldModule
 
      ]




@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
  
})

export class MaterialsModule { }
