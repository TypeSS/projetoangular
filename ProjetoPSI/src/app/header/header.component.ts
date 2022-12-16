import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { subscribeOn, Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';
import { __values } from 'tslib';
var counter:number=1;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Task Reminder';
  showAddTask: boolean | undefined;
  subscription: Subscription | undefined;
  addTask(){
    this.uiService.toggleAddTask()
  }
  constructor (private uiService:UiService){
    this.subscription = this.uiService.onToggle().subscribe( (value) =>(this.showAddTask=value))
  }
}
