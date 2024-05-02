import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { Task } from '../task';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-grid',
  standalone: true,
  imports: [MatProgressBarModule, MatButtonModule, MatDividerModule, MatCardModule, CommonModule, TaskCardComponent],
  templateUrl: './task-grid.component.html',
  styleUrl: './task-grid.component.scss'
})

export class TaskGridComponent {
  @Input() taskList: Task[];
}
