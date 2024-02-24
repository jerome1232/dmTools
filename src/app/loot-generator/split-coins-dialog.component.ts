import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-split-coins-dialog',
  templateUrl: './split-coins-dialog.component.html',
  styleUrls: ['./split-coins-dialog.component.css'],
})
export class SplitCoinsDialogComponent {
  public numPartyMembers: number = 0;
  public allocations: any[] = [];
  public firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  public secondFormGroup = this._formBuilder.group({});

  constructor(private _formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {}

  public onFirstStepClick(): void {
    this.allocations = [];
    const numMembers = this.firstFormGroup.get('firstCtrl')!.value;
    if (numMembers !== null) {
      this.secondFormGroup = this._formBuilder.group({}); // Reinitialize the form group
      for (let i = 0; i < +numMembers; i++) {
        let controlName = `allocation${i}`;
        console.log(controlName)
        this.allocations.push(controlName);
        this.secondFormGroup.addControl(controlName, this._formBuilder.control(100, Validators.required));
      }
      // Emit a value change event to trigger change detection
      this.secondFormGroup.updateValueAndValidity();
      this.cdr.detectChanges();
    }
  }
}
