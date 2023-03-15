import { TestBed } from "@angular/core/testing";
import { TreasureType } from "../enums/treasure.enum";
import { Treasure } from "./treasure.model";

describe('Treasure', () => {
  let model: Treasure;

  beforeEach(() => {
    TestBed.configureTestingModule({})
  });

  const testCases = [
    { type: TreasureType.Unset, name: '', value: 0, expected: { type: TreasureType.Unset, name: '', value: 0 } },
    { type: TreasureType.Gemstone, name: 'Test Gemstone', value: 24, expected: { type: TreasureType.Gemstone, name: 'Test Gemstone', value: 24 } },
    { type: TreasureType.ArtWork, name: 'Test Artwork', value: 22 , expected: { type: TreasureType.ArtWork, name: 'Test Artwork', value: 22 } },
    { type: TreasureType.MagicItem, name: 'Test MagicItem', value: 99, expected: { type: TreasureType.MagicItem, name: 'Test MagicItem', value: 99 } }
  ]

  testCases.forEach( test => {
    it(`Should create a treasure of type: ${TreasureType[test.type]}`, () => {
      let result: Treasure = new Treasure(test.type, test.name, test.value);

      expect(test.expected.name).toEqual(result.name);
      expect(test.expected.type).toEqual(result.type);
      expect(test.expected.value).toEqual(result.value);
    })
  })
})
