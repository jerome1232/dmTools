import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LootGeneratorComponent } from './loot-generator.component';

describe('LootGeneratorComponent', () => {
  let component: LootGeneratorComponent;
  let fixture: ComponentFixture<LootGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LootGeneratorComponent ]
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
