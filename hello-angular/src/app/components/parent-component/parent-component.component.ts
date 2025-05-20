import { Component } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent-component',
  imports: [CommonModule, FormsModule, ChildComponentComponent], //Parent will render Child, so we gotta import
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.css'
})
export class ParentComponentComponent {

  //A Component's TS file stores values and functions that affect the view and app behavior

  //Defining an Array that we'll use to render multiple child components
  arr:number[] = [1, 2, 3, 4]

  //Defining the function that runs when the button is clicked
  showSurprise():void{
    alert("SURPRISE!!!")
  }

  //defining a variable to toggle the hidden div on and off
  hideDiv:boolean = true

  toggleHideDiv(){
    this.hideDiv = !this.hideDiv
  }

  //defining a variable to be populated by the two way binding
  name:string = ""

}
