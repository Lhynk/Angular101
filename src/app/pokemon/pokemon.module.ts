import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { HintComponent } from './hint/hint.component';



@NgModule({
  declarations: [TarjetaComponent, HintComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [TarjetaComponent]
})
export class PokemonModule { }
