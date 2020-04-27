import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pkd-hint',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.scss']
})
export class HintComponent implements OnInit {

  @Input() description:string;
  @Input() image:string;
  @Output() onHide = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  hideBanner(isHide): void{
    this.onHide.emit(isHide);
  }
}
