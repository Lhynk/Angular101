import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'pkd-pokescreen',
  templateUrl: './pokescreen.component.html',
  styleUrls: ['./pokescreen.component.scss']
})
export class PokescreenComponent implements OnInit {
  hayMensaje: boolean = true;
  mensaje: string = 'quién es ese pokemon?';
  description1: string = '';
  image: string = '';
  isVisible: boolean = false;
  isWeaknessVisible: boolean = false;
  InputPokemon: string = '';
  @Input() importedText:string;

  pokemons: Pokemon[] = [];

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
    this.cleanPokemon();
  }

  findPokemon(){
    this.pokemons = [];
    this.pokemonService.getPokemonByID(this.InputPokemon).subscribe((data:Pokemon)=>{      
      this.pokemons.push(data);
    });
  }

  cleanPokemon(){
    this.pokemonService.getPokemon().subscribe((data:Pokemon[])=>{
      this.pokemons = data;
    });
  }

  displayBanner(pokemon: any): void{
    this.description1 = pokemon.description;
    this.image = pokemon.sprite;
    this.hideBanner(true);
  }

  hideBanner(check):void{
    this.isVisible = check;
  }

  showWeakness():void{
    if(this.isWeaknessVisible)
      this.isWeaknessVisible = false;
    else
      this.isWeaknessVisible = true;
  }
}
