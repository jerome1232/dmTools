import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
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

  it('onFirstStepClick should initialize allocations and add controls to secondFormGroup', () => {
    component.firstFormGroup.setValue({ firstCtrl: '3' }); // Set number of party members
    component.onFirstStepClick();
    expect(component.allocations.length).toBe(3); // Check if allocations array is populated
    expect((component.secondFormGroup.controls as any)['allocation0']).toBeDefined(); // Check if control is added to secondFormGroup
  });
});
