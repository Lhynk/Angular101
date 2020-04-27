import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'pkd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';
  messageHeader: string;

  receiveText(text: string): void
  {
    this.messageHeader = text;
  }
}
