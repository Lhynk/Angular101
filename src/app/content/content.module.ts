import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokescreenComponent } from './pokescreen/pokescreen.component';
import { HintComponent } from './hint/hint.component';
import { PokemonService } from './services/pokemon.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PokescreenComponent, HintComponent],
  imports: [
    CommonModule, SharedModule,FormsModule
  ],
  exports: [
    PokescreenComponent
  ],
  providers: [PokemonService]
})
export class ContentModule { }
