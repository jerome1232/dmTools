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

export class Dice {
  private readonly sides: number;

  /**
   * Construct a new die.
   *
   * @param sides Number of sides the die shall have.
   */
  constructor (sides: number) {
    this.sides = sides;
  }

  /**
   * Roll a die.
   *
   * @param times Number of time to roll die/dice.
   * @returns sum of rolled dice.
   */
  public roll(times: number = 1): number {
    let sum: number = 0;
    let min: number = 1;
    for (let i = 0; i < times; i++) {
      sum += Math.floor(Math.random() * (this.sides) + min);
    }
    return sum;
  }
}
