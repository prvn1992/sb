import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  placeholder = 'Type here...';

  @Input()
  type = 'text';

  @Input()
  prefix: string;

  @Input()
  suffix: string;

  @Input()
  class: string[];

  @Input()
  value: string;

}
