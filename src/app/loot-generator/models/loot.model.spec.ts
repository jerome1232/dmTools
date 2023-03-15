import { TestBed } from "@angular/core/testing";

import { Loot } from "./loot.model";

describe('Loot', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({})
  });

  it(`should create a default loot`, () => {
    let result: Loot = new Loot();

    expect(result).toBeDefined();
  });
})
