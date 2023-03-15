import { TestBed } from "@angular/core/testing";

import { Coin } from "./coin.model";

describe('Coin', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({})
  });

  it(`should create a default loot`, () => {
    let result: Coin = new Coin();

    expect(result).toBeDefined();
  });
})
