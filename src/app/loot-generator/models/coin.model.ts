
import { ICoin } from '../interfaces/coin.interface';
import { CoinType } from '../enums/coin.enum';

export class Coin implements ICoin {

  /**
   * @inheritdoc
   */
  public type: CoinType;

  /**
   * @inheritdoc
   */
  public amount: number;

  constructor(type: CoinType = CoinType.Unset, amount: number = 0) {
    this.type = type;
    this.amount = amount;
  }
};
