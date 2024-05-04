import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from '../services/task.service';
import { Task } from '../task';
import { Status } from '../../status';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, RouterModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  providers: [TaskService],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})

export class AddTaskComponent {
  taskName: string;
  taskDescription: string;

  constructor(private router: Router, private taskService: TaskService) {
    this.taskName = '';
    this.taskDescription = '';
  }

  onSubmit() {
    console.log('Task Name:', this.taskName);
    console.log('Description:', this.taskDescription);

    const task: Task = {
      id: this.taskService.getId(),
      title: this.taskName,
      description: this.taskDescription,
      status: Status.ToDo  
    };

    this.taskService.addTask(task);

    console.log('Tasks: ', this.taskService.getTasks());

    this.router.navigate(['/']);
  }
}