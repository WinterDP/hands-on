import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-events-logger-main-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './events-logger-main-page.component.html',
  styleUrls: ['./events-logger-main-page.component.css'],
})
export class EventsLoggerMainPageComponent {}
