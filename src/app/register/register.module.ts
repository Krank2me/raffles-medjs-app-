import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPersonComponent } from './add-person/add-person.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddPersonComponent
  ],
  exports: [
    AddPersonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class RegisterModule { }
