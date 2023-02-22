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

import { CoinType } from "../enums/coin.enum";
import { TreasureType } from "../enums/treasure.enum";
import { ICoin } from "../interfaces/coin.interface";
import { Treasure } from "./treasure.model";

export class Loot {

  /**
   * Coins found.
   */
  coins: ICoin[] = [];

  /**
   * Treasures found.
   */
  treasures: Treasure[] = [];

  /**
   * Constructs a treasure object.
   */
  constructor() {}

  /**
   * Convert all loot to a tabulated string.
   *
   * @returns String representation of a Loot object.
   */
  public toString(): string {
    let data: string = '';
    const col1Width: number = 16;
    const col2Width: number = 90;

    if (this.coins.length > 0) {
      data += `Coins\n${'Coin'.padEnd(col1Width)}\tAmount\n`
    }
    this.coins.forEach( coin => {
      data += `${CoinType[coin.type].padEnd(col1Width)}${coin.amount}\n`;
    })

    if (this.treasures.length > 0) {
      data += `Treasure\n${'Type'.padEnd(col1Width)}${'Name'.padEnd(col2Width)}Value\n`;
    }
    this.treasures.forEach( treasure => {
      data += `${TreasureType[treasure.type].padEnd(col1Width)}${treasure.name.padEnd(col2Width)}${treasure.value === 0 ? '-' : treasure.value}\n`
    })

    return data;
  }
}
