import { CoinType } from "../enums/coin.enum";

export interface ICoin {

  /**
   * The type of coin.
   */
  type: CoinType;

  /**
   * The amount of coins.
   */
  amount: number;
}
