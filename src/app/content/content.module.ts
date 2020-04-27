import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokescreenComponent } from './pokescreen/pokescreen.component';
import { HintComponent } from './hint/hint.component';



@NgModule({
  declarations: [PokescreenComponent, HintComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PokescreenComponent
  ]
})
export class ContentModule { }
