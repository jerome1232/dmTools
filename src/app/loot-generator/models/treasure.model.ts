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

import { TreasureType } from "../enums/treasure.enum";

export class Treasure {

  /**
   * Type of treasure.
   */
  type: TreasureType;

  /**
   * Name of the treasure.
   */
  name: string;

  /**
   * Value of the treasure in gold pieces.
   */
  value: number;

  /**
   * Construct a new treasure object.
   *
   * @param type Type of treasure to create.
   * @param name Descriptive name of the treasure.
   * @param value Value in gold of the treasure, omit for priceless items.
   */
  constructor(type: TreasureType = TreasureType.Unset, name: string = '', value: number = 0) {
    this.type = type;
    this.name = name;
    this.value = value;
  }
}
