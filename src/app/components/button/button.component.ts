import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    // this.btnClick.emit();
  }

}
