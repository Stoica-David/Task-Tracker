import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Task } from '../task';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FilterComponent, MatIconModule, MatButtonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit{
  @Input() taskList: Task[];
  filteredTasks: Task[];

  ngOnInit(): void {
    this.filteredTasks = this.taskList;
  }

  handleStatusSelected(status) {
      this.filteredTasks = this.taskList.filter((task) => task.status === status);
  }

  editTask(task: Task) {
    console.log('Edit task:', task);
    // Add your edit task logic here
  }

  deleteTask(task: Task) {
    console.log('Delete task:', task);

    const index = this.filteredTasks.indexOf(task);
    if (index !== -1) {
      this.filteredTasks.splice(index, 1);
    }
  }
}
