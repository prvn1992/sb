import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'storybook';

  clickHandler(event: MouseEvent) {
    console.log(`Click event handler triggered`);

  }
}
