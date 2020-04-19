import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokescreenComponent } from './pokescreen/pokescreen.component';



@NgModule({
  declarations: [PokescreenComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PokescreenComponent
  ]
})
export class ContentModule { }
