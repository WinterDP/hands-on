import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EntryInfiniteScrollComponent } from 'libs/Entry/entry-infinite-scroll/src/lib/entry-infinite-scroll/entry-infinite-scroll.component';

@Component({
  selector: 'lib-events-logger-main-page',
  standalone: true,
  imports: [CommonModule, RouterLink, EntryInfiniteScrollComponent],
  templateUrl: './events-logger-main-page.component.html',
  styleUrls: ['./events-logger-main-page.component.css'],
})

export class EventsLoggerMainPageComponent {}
