/**
 * This file is part of dmTools.
 *
 * dmTools is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * dmTools is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with dmTools. If not, see <https://www.gnu.org/licenses/>.
 */


import { CoinFactory } from './coin.factory';
import { CoinType } from 'src/app/loot-generator/enums/coin.enum';

describe('CoinFactory', () => {
  describe('create', () => {
    it('should create a coin with the specified parameters', () => {
      const numDie = 2;
      const numDieSides = 6;
      const type = CoinType.Gold;
      const multiplier = 10;

      const coin = CoinFactory.create(numDie, numDieSides, type, multiplier);

      expect(coin.type).toBe(type);
      expect(coin.amount).toBeGreaterThanOrEqual(numDie); // At least as much as the number of dice rolled
      expect(coin.amount).toBeLessThanOrEqual(numDie * numDieSides * multiplier); // Not greater than the maximum possible amount
    });

    it('should create a coin with default multiplier if not provided', () => {
      const numDie = 1;
      const numDieSides = 20;
      const type = CoinType.Silver;

      const coin = CoinFactory.create(numDie, numDieSides, type);

      expect(coin.type).toBe(type);
      expect(coin.amount).toBeGreaterThanOrEqual(numDie); // At least as much as the number of dice rolled
      expect(coin.amount).toBeLessThanOrEqual(numDie * numDieSides); // Not greater than the maximum possible amount without multiplier
    });
  });
});
