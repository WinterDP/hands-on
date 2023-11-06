import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntryInfiniteScrollComponent } from './entry-infinite-scroll.component';

describe('EntryInfiniteScrollComponent', () => {
  let component: EntryInfiniteScrollComponent;
  let fixture: ComponentFixture<EntryInfiniteScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntryInfiniteScrollComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EntryInfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
