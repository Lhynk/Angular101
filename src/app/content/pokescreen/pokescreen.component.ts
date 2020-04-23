import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'pkd-pokescreen',
  templateUrl: './pokescreen.component.html',
  styleUrls: ['./pokescreen.component.scss']
})
export class PokescreenComponent implements OnInit {
  hayMensaje: boolean = true;
  mensaje: string = 'quién es ese pokemon?';
  pokemon: Pokemon[] = [
    {
      "id": 7,
      "name": "Squirtle",
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      "description": "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      "types": ["water"],
      "weakness": ["plant","electric"]
    },
    {
      "id": 17,
      "name": "Pidgeotto",
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
      "description": "Pidgeotto claims a large area as its own territory. This Pokémon flies around, patrolling its living space. If its territory is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.",
      "types": ["normal", "flying"],
      "weakness": ["electric"]
    },
    {
      "id": 52,
      "name": "Meowth",
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
      "description": "Meowth withdraws its sharp claws into its paws to slinkily sneak about without making any incriminating footsteps. For some reason, this Pokémon loves shiny coins that glitter with light.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/052.png",
      "types": ["normal"],
      "weakness": ["fight"]
    },
    {
      "id": 59,
      "name": "Arcanine",
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
      "description": "Arcanine is known for its high speed. It is said to be capable of running over 6,200 miles in a single day and night. The fire that blazes wildly within this Pokémon's body is its source of power.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/059.png",
      "types": ["fire"]
    },
    {
      "id": 93,
      "name": "Haunter",
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
      "description": "Haunter is a dangerous Pokémon. If one beckons you while floating in darkness, you must never approach it. This Pokémon will try to lick you with its tongue and steal your life away.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/093.png",
      "types": ["poison", "ghost"],
      "weakness": ["ground", "psychic"]
    }
  ];

  constructor() { }
  ngOnInit(): void {
  }
}
