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

import { Dice } from './dice.utility';

describe('Dice', () => {
  describe('roll', () => {
    it('should return a valid sum of rolled dice with default parameters', () => {
      const sides = 6;
      const dice = new Dice(sides);
      const rolled = dice.roll();

      expect(rolled).toBeGreaterThanOrEqual(1); // Minimum value of a single roll
      expect(rolled).toBeLessThanOrEqual(sides); // Maximum value of a single roll
    });

    it('should return a valid sum of rolled dice with specified parameters', () => {
      const sides = 20;
      const dice = new Dice(sides);
      const times = 3;
      const rolled = dice.roll(times);

      expect(rolled).toBeGreaterThanOrEqual(times); // Minimum possible sum with the specified number of rolls
      expect(rolled).toBeLessThanOrEqual(times * sides); // Maximum possible sum with the specified number of rolls
    });

    it('should return zero if times is zero', () => {
      const sides = 20;
      const dice = new Dice(sides);
      const times = 0;
      const rolled = dice.roll(times);

      expect(rolled).toBe(0);
    });

    it('should return zero if times is negative', () => {
      const sides = 20;
      const dice = new Dice(sides);
      const times = -3;
      const rolled = dice.roll(times);

      expect(rolled).toBe(0);
    });
  });
});

