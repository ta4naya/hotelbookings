import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ComponentTitle = 'This is my Binding Take Care Of It'
  clickHandler(){
    alert('This is the Event Binding Click')
  }
}
