import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pkd-hcomponen', //este es el que se jala para el "main.htlm"
  templateUrl: './hcomponen.component.html',
  styleUrls: ['./hcomponen.component.scss'],
})
export class HComponenComponent implements OnInit {
  constructor() {}
title: string="Pokedex"; //esta agarrando la variable y mostrnadola en html 
  ngOnInit(): void {}
}
