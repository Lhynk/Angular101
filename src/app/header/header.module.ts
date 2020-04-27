import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokeheaderComponent } from './pokeheader/pokeheader.component';



@NgModule({
  declarations: [PokeheaderComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PokeheaderComponent
  ]
})
export class HeaderModule { }
