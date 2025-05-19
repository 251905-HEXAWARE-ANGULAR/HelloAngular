import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ParentComponentComponent], //any components or libs to be used in the component
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-angular';
}
