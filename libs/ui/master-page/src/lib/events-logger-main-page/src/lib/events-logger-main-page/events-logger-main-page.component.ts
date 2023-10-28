import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EntryComponent } from 'src/app/Entry/entry.component';
import { EntryInfiniteScrollComponent } from 'src/app/EntryInfiniteScroll/EntryInfiniteScroll/entry-infinite-scroll.component';

@Component({
  selector: 'lib-events-logger-main-page',
  standalone: true,
  imports: [CommonModule, RouterLink, EntryComponent, EntryInfiniteScrollComponent],
  templateUrl: './events-logger-main-page.component.html',
  styleUrls: ['./events-logger-main-page.component.css'],
})

export class EventsLoggerMainPageComponent {}
