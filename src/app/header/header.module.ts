import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeheaderComponent } from './pokeheader/pokeheader.component';



@NgModule({
  declarations: [PokeheaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PokeheaderComponent
  ]
})
export class HeaderModule { }
