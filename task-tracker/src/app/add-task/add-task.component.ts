import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, RouterModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})

export class AddTaskComponent {
  taskName: string;
  taskDescription: string;

  constructor(private router: Router) {
    this.taskName = '';
    this.taskDescription = '';
  }

  onSubmit() {
    console.log('Task Name:', this.taskName);
    console.log('Description:', this.taskDescription);

    this.router.navigate(['/']);
  }
}