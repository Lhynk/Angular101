import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberPokemonPipe } from './pipes/number-pokemon.pipe';



@NgModule({
  declarations: [NumberPokemonPipe],
  imports: [
    CommonModule
  ],
  exports: [NumberPokemonPipe]
})
export class SharedModule { }
