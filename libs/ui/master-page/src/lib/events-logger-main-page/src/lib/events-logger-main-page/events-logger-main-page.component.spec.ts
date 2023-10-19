import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsLoggerMainPageComponent } from './events-logger-main-page.component';

describe('EventsLoggerMainPageComponent', () => {
  let component: EventsLoggerMainPageComponent;
  let fixture: ComponentFixture<EventsLoggerMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsLoggerMainPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsLoggerMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
