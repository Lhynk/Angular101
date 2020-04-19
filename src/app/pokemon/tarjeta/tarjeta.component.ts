import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pkd-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss']
})
export class TarjetaComponent implements OnInit {
  title = "Pokedex";
  pokemon = [
    {
      "id": 149,
      "name": "Dragonite",
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
      "description": "Dragonite is capable of circling the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/149.png",
      "types": ["flying", "dragon"]
    },
    {
      "id": 38,
      "name": "Ninetales",
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
      "description": "Legend has it that Ninetales came into being when nine wizards possessing sacred powers merged into one. This Pokémon is highly intelligent—it can understand human speech.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/038.png",
      "types": ["fire"]
    },
    {
      "id": 133,
      "name": "Eevee",
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
      "description": "Eevee has an unstable genetic makeup that suddenly mutates due to the environment in which it lives. Radiation from various stones causes this Pokémon to evolve.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/133.png",
      "types": ["normal"]
    },
    {
      "id": 131,
      "name": "Lapras",
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
      "description": "People have driven Lapras almost to the point of extinction. In the evenings, this Pokémon is said to sing plaintively as it seeks what few others of its kind still remain.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/131.png",
      "types": ["water", "ice"]
    },
    {
      "id": 124,
      "name": "Jynx",
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
      "description": "Jynx walks rhythmically, swaying and shaking its hips as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without giving any thought to what they are doing.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/124.png",
      "types": ["ice", "psychic"]
    },
    {
      "id": 27,
      "name": "Sandshrew",
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
      "description": "Sandshrew has a very dry hide that is extremely tough. The Pokémon can roll into a ball that repels any attack. At night, it burrows into the desert sand to sleep.",
      "art_url": "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/027.png",
      "types": ["ground"]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
