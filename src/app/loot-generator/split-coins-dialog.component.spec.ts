import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { SplitCoinsDialogComponent } from './split-coins-dialog.component';

describe('SplitCoinsDialogComponent', () => {
  let component: SplitCoinsDialogComponent;
  let fixture: ComponentFixture<SplitCoinsDialogComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SplitCoinsDialogComponent],
      imports: [ReactiveFormsModule, MatSliderModule],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitCoinsDialogComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form groups', () => {
    expect(component.firstFormGroup).toBeDefined();
    expect(component.secondFormGroup).toBeDefined();
  });

  it('onFirstStepClick should initialize allocations, values, names and locks', () => {
    component.firstFormGroup.setValue({ firstCtrl: '3' }); // Set number of party members
    component.onFirstStepClick();
    expect(component.allocations.length).toBe(3); // allocations populated
    expect(component.allocationsValues.length).toBe(3); // values set
    expect(component.names.length).toBe(3); // names initialized
    expect(component.allocationsDraft.length).toBe(3); // drafts initialized
    expect(component.locked.length).toBe(3); // locks initialized
    const total = component.allocationsValues.reduce((s, v) => s + (v || 0), 0);
    expect(Math.round(total)).toBe(100); // allocations sum to 100
  });
});
