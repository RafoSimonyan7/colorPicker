import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent {

  @Output() changeColor: EventEmitter<any> = new EventEmitter<any>() 
  @Input() index!: number
  @Input() background: string = "transparent" 



  setColor() {
    this.changeColor.emit(this.index);
  }  

  
}
