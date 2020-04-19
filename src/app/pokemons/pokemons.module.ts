import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PComponentComponent } from './pcomponent/pcomponent.component';



@NgModule({
  declarations: [PComponentComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PComponentComponent
  ]
})
export class PokemonsModule { }
