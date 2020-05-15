import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'pkd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';
  messageText:string = "";
  valor:string = "";
  @Output() onMostrar = new EventEmitter<string>();

  showMessage(valor):void{
    //this.messageText = valor;
    this.onMostrar.emit(this.valor);
  }
}