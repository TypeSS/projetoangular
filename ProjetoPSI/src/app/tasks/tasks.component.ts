import { Component, OnInit, Input, Output, EventEmitter} from "@angular/core"
import { TaskService } from '../services/task.service';
import {Task} from '../Task';
import { Observable } from "rxjs";
import { from } from 'rxjs';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {

  tasks: Task[] = [];
  constructor(private TaskService:TaskService){}

  deleteTask(task: Task) {
    if(confirm("Deseja mesmo apagar " + task.id + "?")){
    this.TaskService.deleteTask(task).subscribe(() =>
    (this.tasks = this.tasks.filter(t => t.id !== task.id)));
    }
  }

    toggleReminder(task: Task){
      task.reminder=!task.reminder
      this.TaskService.updateTaskReminder(task).subscribe();
    }

    addTask(task:Task){
      this.TaskService.addTask(task).subscribe();
    }

    ngOnInit(){
      this.TaskService.getTasks().subscribe(tasks => this.tasks=tasks);
    }
}
