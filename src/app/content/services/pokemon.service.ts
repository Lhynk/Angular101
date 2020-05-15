import { Injectable } from '@angular/core';
import { Pokemon } from '../pokescreen/pokemon';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseService: string = 'http://localhost:3000';

  constructor(private httpService: HttpClient) { }

  getPokemon():Observable<Pokemon[]>{
    return this.httpService.get<Pokemon[]>(`${this.baseService}/pokemon`);
  }

  getPokemonByID(id:string):Observable<Pokemon>{
    return this.httpService.get<Pokemon>(`${this.baseService}/pokemon/${id}`);
  }
}