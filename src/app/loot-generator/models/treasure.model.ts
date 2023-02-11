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

  constructor(type: TreasureType = TreasureType.Unset, name: string = '', value: number = 0) {
    this.type = type;
    this.name = name;
    this.value = value;
  }
}
