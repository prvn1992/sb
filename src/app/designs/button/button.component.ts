import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Is this the principal call to action on the page?
   */
   @Input()
   primary = false;

   /**
    * What background color to use
    */
   @Input()
   backgroundColor?: string;

   /**
    * How large should the button be?
    */
   @Input()
   size: 'small' | 'medium' | 'large' = 'medium';

   /**
    * Button contents
    *
    * @required
    */
   @Input()
   label = 'Button';

   /**
    * Optional click handler
    */
   @Output()
   onClick = new EventEmitter<Event>();

   public get classes(): string[] {
     const mode = this.primary ? 'button--primary' : 'button--secondary';

     return ['button', `button--${this.size}`, mode];
   }

}
