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

import { CoinType } from "src/app/loot-generator/enums/coin.enum";
import { Coin } from "src/app/loot-generator/models/coin.model";
import { Dice } from "./dice.utility";

/**
 * Creates coins
 */
export class CoinFactory {

  /**
   * Create coins.
   *
   * @param numDie How man times to roll die in coin creation.
   * @param numDieSides Number of sides to give die.
   * @param type Type of coin to create.
   * @param multiplier Amount to multiply dice sum by.
   * @returns A newly generated coin.
   */
  public static create(numDie: number,
                numDieSides: number,
                type: CoinType,
                multiplier: number = 1): Coin {
    let die: Dice = new Dice(numDieSides);
    let amount = die.roll(numDie) * multiplier;
    return new Coin(type, amount);
  }
}
