import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  color = '';
  selected: string = '';  
  size!: number;
  circlesArray: any
  

  selectChangeHandler($event: any) {
    this.selected = $event.target.value
  }

  counter(i: string) {
    let count = Number(i)
    this.circlesArray = new Array(count)
    return this.circlesArray;
  }

  getColor(index: any) {
    this.circlesArray[index] = this.color
    console.log(this.circlesArray[index]);
    
  }

  save() {
    console.log(this.color);
  }
  
}
