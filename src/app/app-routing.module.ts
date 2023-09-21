import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ExamComponent } from './exam/exam.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'drop', component:DropdownComponent},
  {path:'exam', component:ExamComponent},
  {path:'', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
