import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pkd-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  title : string;
  test: string;

  @Output() onClick = new EventEmitter<string>(); 


  constructor() { 
    this.title = "Pokedex construtor";
  }

  ngOnInit(): void {
  }

  textCapture(): void {
    this.onClick.emit(this.test);
  }
}
