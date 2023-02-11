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

}
