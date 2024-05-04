import { Injectable } from '@angular/core';
import { Task } from '../task';
import { Status } from '../../status';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasks: Task[] = [
    {
    id: '0',
    title: 'First task',
    description: 'Do the laundry',
    status: Status.ToDo 
  },
  {
    id: '1',
    title: 'Second task',
    description: 'Eat',
    status: Status.InProgress 
  },
  {
    id: '2',
    title: 'Third task',
    description: 'Do the homework',
    status: Status.Done
  }
  ];

  constructor() { }

  getTasks() {
    return this.tasks;
  }

  getId(){
    return (this.tasks.length + 1).toString();
  }

  addTask(newTask: Task) {
    this.tasks.push(newTask);
    return newTask;
  }

  editTask(task: Task): void {
    let i = this.tasks.findIndex((t) => t.id === task.id);
    this.tasks[i] = task;
  }

  deleteTask(task: Task): void {
      // const index = parseInt(id, 10);
    // if (!isNaN(index) && index >= 0 && index < this.tasks.length) {
    //   this.tasks.splice(index, 1);
    // } else {
    //   console.error('Invalid index:', id);
    // }

    // this.tasks = this.tasks.filter(task => task.id !== id);

    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

}
