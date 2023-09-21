import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ExamComponent } from './exam/exam.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";
import { DropdownModule } from "primeng/dropdown";
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BreadcrumbModule } from "primeng/breadcrumb";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ExamComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageModule,
    DropdownModule,
    ButtonModule,
    RadioButtonModule,
    BreadcrumbModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
