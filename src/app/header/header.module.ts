import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HComponenComponent } from './hcomponent/hcomponen.component';



@NgModule({
  declarations: [HComponenComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HComponenComponent
  ]
})
export class HeaderModule { }
