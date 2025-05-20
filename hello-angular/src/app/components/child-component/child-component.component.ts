import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {

  //We can pass data from a parent to a child with @Input
  //The value is passed through property binding when the parent RENDERS the child 
  @Input() index: number = 0;

}
