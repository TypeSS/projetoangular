import { Component,Output,EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';
import { Task } from '../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean|undefined;
  subscription: Subscription | undefined;
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter;

  constructor(private uiService:UiService) {
    this.subscription=this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  onSubmit(){
    if(!this.text){
      alert("Adicione uma tarefa!");
      return;
    }

    const newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    };

    this.onAddTask.emit(newTask);
    this.text="";
    this.day="";
    this.reminder=false;
    console.log(newTask);
  }
}
