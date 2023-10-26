import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EntryComponent } from 'src/app/Entry/entry.component';

@Component({
  selector: 'lib-events-logger-main-page',
  standalone: true,
  imports: [CommonModule, RouterLink, EntryComponent],
  templateUrl: './events-logger-main-page.component.html',
  styleUrls: ['./events-logger-main-page.component.css'],
})

export class EventsLoggerMainPageComponent {}
