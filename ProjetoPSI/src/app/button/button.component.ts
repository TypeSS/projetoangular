import { Dialog } from '@angular/cdk/dialog';
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
@Input() texto:string="";
@Input() cor:string="";
@Output() btnClick = new EventEmitter();
onClick(){
  this.btnClick.emit();
}
}

