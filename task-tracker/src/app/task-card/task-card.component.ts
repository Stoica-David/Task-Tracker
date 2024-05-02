import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { Task } from '../task';
import { Input } from '@angular/core';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [MatProgressBarModule, MatButtonModule, MatDividerModule, MatCardModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})

export class TaskCardComponent {
  @Input() task: Task;
}
