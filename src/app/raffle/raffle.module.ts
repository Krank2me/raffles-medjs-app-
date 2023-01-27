import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinerComponent } from './winer/winer.component';



@NgModule({
  declarations: [
    WinerComponent
  ],
  exports: [
    WinerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RaffleModule { }
