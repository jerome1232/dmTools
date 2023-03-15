import { TestBed } from '@angular/core/testing';

import { Dice } from './dice.utility';

describe('DiceService', () => {
  let utility: Dice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  const testCases = [
    { sides: 1, minResult: 1, maxResult: 1 },
    { sides: 2, minResult: 1, maxResult: 2 },
    { sides: 100, minResult: 1, maxResult: 100 }
  ]

  for (let i = 0; i < 100; i++)
  {
    testCases.forEach( test => {
      it(`Should create a ${test.sides} sided die`, () => {
        let testDie: Dice = new Dice(test.sides);
        let result: number = testDie.roll();

        expect(result >= test.minResult).toBeTrue();
        expect(result <= test.maxResult).toBeTrue();
      })
    })
  }
});
