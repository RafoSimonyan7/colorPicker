import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { CirclesComponent } from './circles/circles.component';


@NgModule({
  declarations: [
    AppComponent,
    CirclesComponent
  ],
  imports: [
    BrowserModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
