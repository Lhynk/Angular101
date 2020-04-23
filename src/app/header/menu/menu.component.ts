import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pkd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  title : string;

  constructor() { 
    this.title = "Pokedex construtor";
  }

  ngOnInit(): void {
  }

}
