import { Component, OnInit } from '@angular/core';
import { IPokemon } from './IPokemon';

@Component({
  selector: 'pkd-pcomponent',
  templateUrl: './pcomponent.component.html',
  styleUrls: ['./pcomponent.component.scss'],
})
export class PComponentComponent implements OnInit {
  //implements te obliga a meter un metodo de a fuerza, tipo interfaz
  //se necesita decir que es un arreglo y no solo uno, para que lo tome de uno por uno
  pokemones: IPokemon[] = [
    {
      id: 150,
      name: 'Mewtwo',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
      description:
        "Mewtwo is a Pokémon that was created by genetic manipulation. However, even though the scientific power of humans created this Pokémon's body, they failed to endow Mewtwo with a compassionate heart.",
      art_url:
        'http://assets22.pokemon.com/assets/cms2/img/pokedex/full/150.png',
      types: ['psychic'],
      weak_to: ['Psychic', 'Ghost'],
    },
    {
      id: 151,
      name: 'Mew',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png',
      description:
        'Mew is said to possess the genetic composition of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.',
      art_url:
        'http://assets22.pokemon.com/assets/cms2/img/pokedex/full/151.png',
      types: ['psychic'],
      weak_to: ['Psychic', 'Ghost', 'Bug', 'Dark'],
      art_urlA:
        'https://pbs.twimg.com/media/DoU9TS4UYAAKxtZ?format=jpg&name=small',
    },
    {
      id: 144,
      name: 'Articuno',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png',
      description:
        'Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.',
      art_url:
        'http://assets22.pokemon.com/assets/cms2/img/pokedex/full/144.png',
      types: ['flying', 'ice'],
      weak_to: ['Rock', 'Fire'],
      art_urlA:
        'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png',
    },
    {
      id: 145,
      name: 'Zapdos',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png',
      description:
        'Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. The Pokémon gains power if it is stricken by lightning bolts.',
      art_url:
        'http://assets22.pokemon.com/assets/cms2/img/pokedex/full/145.png',
      types: ['flying', 'electric'],
    },
    {
      id: 146,
      name: 'Moltres',
      sprite:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png',
      description:
        'Moltres is a legendary bird Pokémon that has the ability to control fire. If this Pokémon is injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.',
      art_url:
        'http://assets22.pokemon.com/assets/cms2/img/pokedex/full/146.png',
      types: ['flying', 'fire'],
    },
  ];

  constructor() {}
  mostrarPokemon: boolean;
  pokemonSeleccionado: IPokemon;
  ngOnInit(): void {}

  public MostrarInfo(pokemon: IPokemon): void {
    this.mostrarPokemon = true;
    this.pokemonSeleccionado = pokemon;
  }

  public OcultarInfo(): void {
    this.mostrarPokemon = null;
    this.pokemonSeleccionado = null;
  }
}
