import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'pkd-pokeheader',
  templateUrl: './pokeheader.component.html',
  styleUrls: ['./pokeheader.component.scss']
})
export class PokeheaderComponent implements OnInit {
  title: string = 'Pokedets';
  @Output() onShow = new EventEmitter<string>();
  inputText:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.onShow.emit(this.inputText);
  }

}