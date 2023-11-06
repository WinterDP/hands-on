import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateEntryPageComponent } from './create-entry-page.component';

describe('CreateEntryPageComponent', () => {
  let component: CreateEntryPageComponent;
  let fixture: ComponentFixture<CreateEntryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEntryPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateEntryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
