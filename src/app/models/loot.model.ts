import { ICoin } from "../interfaces/coin.interface";
import { Treasure } from "../interfaces/treasure.interface";

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

}
