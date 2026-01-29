import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CoinType } from './enums/coin.enum';

@Component({
  selector: 'app-split-coins-dialog',
  templateUrl: './split-coins-dialog.component.html',
  styleUrls: ['./split-coins-dialog.component.css'],
})
export class SplitCoinsDialogComponent {
  public numPartyMembers: number = 0;
  public allocations: any[] = [];
  public allocationsValues: number[] = [];
  public locked: boolean[] = [];
  public allocationsDraft: (number | undefined)[] = [];
  public names: string[] = [];
  public splitResults: Array<{ name: string; coins: { type: string; amount: number }[] }> = [];
  public firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  public secondFormGroup = this._formBuilder.group({});
  private isAdjusting = false;
  private throttleMs = 50; // max frequency (ms) for live redistribution while dragging
  private lastThrottle = 0;
  private pendingThrottle: any = null;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {}

  public onFirstStepClickAndAdvance(stepper: any): void {
    this.onFirstStepClick();
    if (this.firstFormGroup.valid) {
      setTimeout(() => stepper.next(), 0);
    }
  }

  public onFirstStepClick(): void {
    this.allocations = [];
    this.allocationsValues = [];
    const numMembers = this.firstFormGroup.get('firstCtrl')!.value;
    if (numMembers !== null) {
      this.secondFormGroup = this._formBuilder.group({}); // Reinitialize the form group
      const n = +numMembers;
      const base = Math.floor(100 / n);
      const remainder = 100 - base * n;
      for (let i = 0; i < n; i++) {
        const initial = base + (i === 0 ? remainder : 0);
        this.allocations.push(`allocation${i}`);
        this.allocationsValues.push(initial);
        this.allocationsDraft.push(initial);
        this.locked.push(false);
          this.names.push(`Player ${i + 1}`);
      }
      // Emit a value change event to trigger change detection
      this.secondFormGroup.updateValueAndValidity();
      this.cdr.detectChanges();
    }
  }

  private onAllocationChange(index: number, newVal: number) {
    if (this.isAdjusting) return;
    if (newVal === null || newVal === undefined) return;
    newVal = Math.round(newVal);
    const previous = this.allocationsValues[index] ?? 0;
    let delta = newVal - previous;
    if (delta === 0) return;

    this.isAdjusting = true;

    const n = this.allocationsValues.length;
    let remaining = Math.abs(delta);
    const others = Array.from({ length: n }, (_, i) => i).filter(i => i !== index && !this.locked[i]);

    const direction = delta > 0 ? -1 : 1;

    while (remaining > 0.0001) {
      let capacities = others.map(j => (direction === -1 ? this.allocationsValues[j] : 100 - this.allocationsValues[j]));
      let sumCap = capacities.reduce((s, c) => s + (c > 0 ? c : 0), 0);
      if (sumCap <= 0) break;

      let appliedThisRound = 0;
      for (let k = 0; k < others.length; k++) {
        const j = others[k];
        const cap = capacities[k] > 0 ? capacities[k] : 0;
        if (cap <= 0) continue;
        const share = cap / sumCap;
        const amount = Math.min(cap, share * remaining);
        this.allocationsValues[j] = Math.round((this.allocationsValues[j] + direction * amount) * 100) / 100;
        appliedThisRound += amount;
      }

      if (appliedThisRound <= 0) break;
      remaining -= appliedThisRound;
    }

    const applied = Math.abs(delta) - remaining;
    const finalValue = previous + (delta > 0 ? applied : -applied);
    this.allocationsValues[index] = Math.round(finalValue * 100) / 100;

    const total = this.allocationsValues.reduce((s, v) => s + v, 0);
    const diff = Math.round((100 - total) * 100) / 100;
    if (Math.abs(diff) > 0.001) {
      // try to find an unlocked index to absorb rounding diff
      let adjustIndex = -1;
      for (let i = n - 1; i >= 0; i--) {
        if (i !== index && !this.locked[i]) { adjustIndex = i; break; }
      }
      if (adjustIndex === -1) adjustIndex = index; // fallback
      this.allocationsValues[adjustIndex] = Math.round((this.allocationsValues[adjustIndex] + diff) * 100) / 100;
    }

    for (let i = 0; i < n; i++) {
      // update displayed values; sliders are bound to allocationsValues via template
    }

    this.isAdjusting = false;
  }

  // update only the active slider draft while the user is dragging
  public onSliderDrag(index: number, value: any) {
    if (this.isAdjusting) return;
    const v = Math.round(Number(value));
    const max = this.getSliderMax(index);
    this.allocationsDraft[index] = Math.max(0, Math.min(max, v));

    const now = Date.now();
    const run = () => {
      const draftVal = this.allocationsDraft[index] ?? this.allocationsValues[index];
      this.onAllocationChange(index, draftVal);
      // refresh draft to reflect new allocations
      this.allocationsDraft = this.allocationsValues.slice();
      this.lastThrottle = Date.now();
      this.pendingThrottle = null;
    };

    const since = now - this.lastThrottle;
    if (since >= this.throttleMs) {
      if (this.pendingThrottle) { clearTimeout(this.pendingThrottle); this.pendingThrottle = null; }
      run();
    } else {
      if (!this.pendingThrottle) {
        this.pendingThrottle = setTimeout(() => run(), this.throttleMs - since);
      }
    }
  }

  // user finished dragging / changed value - now redistribute to keep total 100
  public onSliderChange(index: number, value: any) {
    if (this.isAdjusting) return;
    if (this.pendingThrottle) { clearTimeout(this.pendingThrottle); this.pendingThrottle = null; }
    const v = Math.round(Number(value));
    const max = this.getSliderMax(index);
    this.onAllocationChange(index, Math.max(0, Math.min(max, v)));
    // update draft to reflect redistributed values
    this.allocationsDraft = this.allocationsValues.slice();
    this.lastThrottle = Date.now();
  }

  public getSliderMax(index: number): number {
    const n = this.allocationsValues.length;
    // total capacity available from other unlocked sliders (how much they can be reduced)
    let sumCap = 0;
    for (let j = 0; j < n; j++) {
      if (j === index) continue;
      if (this.locked[j]) continue;
      sumCap += this.allocationsValues[j] ?? 0;
    }
    const max = Math.min(100, (this.allocationsValues[index] ?? 0) + sumCap);
    return Math.max(0, Math.round(max));
  }

  public toggleLock(index: number) {
    this.locked[index] = !this.locked[index];
    // if newly unlocked, ensure drafted value matches current value
    this.allocationsDraft[index] = this.allocationsValues[index];
  }

  public get totalAllocation(): number {
    return Math.round((this.allocationsValues.reduce((s, v) => s + (v || 0), 0) || 0) * 100) / 100;
  }

  public generateResults(): void {
    const coins = (this.data && this.data.coins) ? this.data.coins : [];
    const n = this.allocationsValues.length;
    this.splitResults = [];
    for (let i = 0; i < n; i++) {
      this.splitResults.push({ name: this.names[i] || `Player ${i+1}`, coins: [] });
    }

    coins.forEach((coin: any) => {
      const total = coin.amount || 0;
      if (total <= 0) return;
      const raw: number[] = [];
      const floored: number[] = [];
      const rem: number[] = [];
      for (let i = 0; i < n; i++) {
        const r = (this.allocationsValues[i] || 0) * total / 100;
        raw.push(r);
        floored.push(Math.floor(r));
        rem.push(r - Math.floor(r));
      }
      let assigned = floored.reduce((s, v) => s + v, 0);
      let leftover = total - assigned;
      // distribute leftover by largest remainder
      const indices = raw.map((v, idx) => ({ idx, rem: rem[idx] })).sort((a,b) => b.rem - a.rem);
      let k = 0;
      while (leftover > 0 && k < indices.length) {
        floored[indices[k].idx] += 1;
        leftover -= 1;
        k += 1;
      }
      // push results (map enum numeric type to human-readable label)
      for (let i = 0; i < n; i++) {
        this.splitResults[i].coins.push({ type: this.coinTypeLabel(coin.type), amount: floored[i] });
      }
    });
  }
 

  private coinTypeLabel(type: CoinType | number | undefined): string {
    switch (type) {
      case CoinType.Copper:
        return 'Copper';
      case CoinType.Silver:
        return 'Silver';
      case CoinType.Gold:
        return 'Gold';
      case CoinType.Electrum:
        return 'Electrum';
      case CoinType.Platinum:
        return 'Platinum';
      default:
        return 'Unknown';
    }
  }

  public onStepChange(event: any): void {
    if (event && event.selectedIndex === 2) {
      this.generateResults();
    }
  }

  public onResultNameChange(index: number, value: string): void {
    if (index < 0 || index >= this.splitResults.length) return;
    this.splitResults[index].name = value || `Player ${index + 1}`;
    // keep the primary `names` array in sync for other steps
    if (this.names && index < this.names.length) {
      this.names[index] = this.splitResults[index].name;
    }
  }
}
