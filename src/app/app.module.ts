import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BsStepperComponent } from './components/bsstepper/bsstepper.component';
import {
  MatStepperModule,
  MatSelectModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule, MatInputModule,
  MatFormFieldModule
} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    BsStepperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatStepperModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule,
    MatInputModule,
    MatFormFieldModule, MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
