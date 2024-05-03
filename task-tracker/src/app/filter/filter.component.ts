import { Component, OnInit } from '@angular/core';
import { Status } from '../../status';
import { CommonModule } from '@angular/common';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})

export class FilterComponent  {

  statuses = Object.values(Status);

  selectStatus(status: Status) {
    this.statusSelected.emit(status)
  }

  @Output() statusSelected: EventEmitter<Status> = new EventEmitter();
}
