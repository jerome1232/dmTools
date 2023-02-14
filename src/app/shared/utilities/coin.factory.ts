import { CoinType } from "src/app/loot-generator/enums/coin.enum";
import { Coin } from "src/app/loot-generator/models/coin.model";
import { Dice } from "./dice.utility";

export class CoinFactory {

  public static create(numDie: number,
                numDieSides: number,
                type: CoinType,
                multiplier: number = 1): Coin {
    let die: Dice = new Dice(numDieSides);
    let amount = die.roll(numDie) * multiplier;
    return new Coin(type, amount);
  }
}
