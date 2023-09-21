import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MasterPageLibComponent } from './master-page-lib.component';

describe('MasterPageLibComponent', () => {
  let component: MasterPageLibComponent;
  let fixture: ComponentFixture<MasterPageLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterPageLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MasterPageLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
