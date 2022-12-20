import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculatrice';
  number = divideNumbers(12,5);
  display = false;
  searchValue = ''; 


  onClick(){
    this.display = !this.display;
  }

  
}

function addNumbers(actual:number, toAdd:number) {
  // Just to test 
  return actual + toAdd
}

function substractNumbers(actual:number, toSubstract:number) {
  // Just to test 

  return actual - toSubstract
}

function divideNumbers (actual:number, toDevide:number) {
  return actual / toDevide 
}