import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TaskGridComponent } from '../task-grid/task-grid.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { Task } from '../task';
import { Input } from '@angular/core';
import { Status } from '../../status';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-view',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, TaskGridComponent, TaskListComponent, CommonModule],
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.scss'
})

export class TasksViewComponent {
  @Input() taskList: Task[]= [{
    id: '1',
    title: 'First task',
    description: 'Do the laundry',
    status: Status.ToDo 
  },
  {
    id: '2',
    title: 'Second task',
    description: 'Eat',
    status: Status.InProgress 
  },
  {
    id: '3',
    title: 'Third task',
    description: 'Do the homework',
    status: Status.Done
  }
];

  isList: boolean = true;
}
