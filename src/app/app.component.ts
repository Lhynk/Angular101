import { Component } from '@angular/core';


@Component({
  selector: 'pkd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';
  messageText:string = "";
  valor:string = "";

  showMessage(valor):void{
    this.messageText = valor;
  }
}