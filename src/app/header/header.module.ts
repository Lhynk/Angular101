import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HComponenComponent } from './hcomponent/hcomponen.component';



@NgModule({
  declarations: [HComponenComponent],
  imports: [
    CommonModule
  ],
  exports:[ //se necesita agregar este export para que pueda ser leeido desde otros modulos
    HComponenComponent
  ]
})
export class HeaderModule { }
