import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pkd-pcomponent',
  templateUrl: './pcomponent.component.html',
  styleUrls: ['./pcomponent.component.scss']
})
export class PComponentComponent implements OnInit {

  constructor() { }
  pokemones = [
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
  ngOnInit(): void {
  }

}
