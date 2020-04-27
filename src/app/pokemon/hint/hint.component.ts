import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { pokemon } from '../tarjeta/pokemon';

@Component({
  selector: 'pkd-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent implements OnInit {

  @Input() pokemon: pokemon;
  @Output() onCloseHint = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  pokemonClose(): void
  {
    this.onCloseHint.emit();
  }
}
