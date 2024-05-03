import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Task } from '../task';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatProgressBarModule, MatButtonModule, MatDividerModule, MatCardModule, MatIconModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})

export class TaskCardComponent {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  editTask(task: Task) {
    console.log('Edit task:', task);
    // Add your edit task logic here
  }

  deleteTask(task: Task) {
    console.log('Delete task:', task);
    // Add your delete task logic here
  }
}
