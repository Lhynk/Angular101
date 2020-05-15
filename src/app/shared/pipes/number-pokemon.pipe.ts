import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPokemon'
})
export class NumberPokemonPipe implements PipeTransform {

  transform(value: number, withNo: boolean): string {
    if(withNo) return `No.${value}`; //alt+96
    return ''+value;
  }
}