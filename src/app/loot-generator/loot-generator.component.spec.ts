import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LootGeneratorComponent } from './loot-generator.component';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSlider, MatSliderModule, MatSliderVisualThumb } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { ContentContainerComponentHarness, HarnessLoader } from '@angular/cdk/testing';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('LootGeneratorComponent', () => {
  let component: LootGeneratorComponent;
  let fixture: ComponentFixture<LootGeneratorComponent>;
  let loader: HarnessLoader;
  let rootLoader: HarnessLoader;
  const snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);
  const clipboardSpy = jasmine.createSpyObj('Clipboard', ['beginCopy']);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatRippleModule,
        MatCardModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatIconModule,
        MatTableModule,
        MatSnackBarModule,
        MatTooltipModule
       ],
      declarations: [ LootGeneratorComponent ],
      providers: [
        MatSnackBar,
        { provider: MatSnackBar, useValue: snackBarSpy },
        Clipboard,
        { provider: Clipboard, useValue: clipboardSpy }
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(LootGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
