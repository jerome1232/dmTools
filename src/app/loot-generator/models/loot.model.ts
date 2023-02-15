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

  public toString(): string {
    let data: string = '';

    if (this.coins.length > 0) {
      data += 'Coins\nCoin\tAmount\n'
    }
    this.coins.forEach( coin => {
      data += `${CoinType[coin.type]}\t${coin.amount}\n`;
    })

    if (this.treasures.length > 0) {
      data += "Treasure\nType\tName\tValue\n";
    }
    this.treasures.forEach( treasure => {
      data += `${TreasureType[treasure.type]}\t${treasure.name}\t${treasure.value === 0 ? '-' : treasure.value}\n`
    })

    return data;
  }
}
