import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SplitCoinsDialogComponent } from './split-coins-dialog.component';

describe('SplitCoinsDialogComponent', () => {
  let component: SplitCoinsDialogComponent;
  let fixture: ComponentFixture<SplitCoinsDialogComponent>;
  let formBuilder: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SplitCoinsDialogComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatSliderModule,
        (await import('@angular/platform-browser/animations')).NoopAnimationsModule,
        (await import('@angular/material/stepper')).MatStepperModule,
        (await import('@angular/material/form-field')).MatFormFieldModule,
        (await import('@angular/material/input')).MatInputModule,
        (await import('@angular/material/button')).MatButtonModule,
        (await import('@angular/material/icon')).MatIconModule,
        (await import('@angular/material/dialog')).MatDialogModule
      ],
      providers: [FormBuilder, { provide: MAT_DIALOG_DATA, useValue: { coins: [] } }],
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
