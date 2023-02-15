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
    const col1Width: number = 16;
    const col2Width: number = 90;

    if (this.coins.length > 0) {
      data += 'Coins\nCoin\tAmount\n'
    }
    this.coins.forEach( coin => {
      data += `${CoinType[coin.type]}\t${coin.amount}\n`;
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
