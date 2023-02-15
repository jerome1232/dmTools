import { ArtworkFactory } from "src/app/shared/utilities/artwork.factory";
import { CoinFactory } from "src/app/shared/utilities/coin.factory";
import { Dice } from "src/app/shared/utilities/dice.utility";
import { GemFactory } from "src/app/shared/utilities/gem.factory";
import { MagicItemFactory } from "src/app/shared/utilities/magic-item.factory";
import { CoinType } from "../enums/coin.enum";
import { Coin } from "../models/coin.model";
import { Loot } from "../models/loot.model";
import { Treasure } from "../models/treasure.model";

export class TreasureGenerator {
  private loot: Loot = new Loot();
  private cr: number | null = null;
  private isGroup: boolean | null = null;

  private die100: Dice = new Dice(100);
  private die10: Dice = new Dice(10);
  private die8: Dice = new Dice(8);
  private die6: Dice = new Dice(6);
  private die4: Dice = new Dice(4);

  public Generate(cr: number, isGroup: boolean): Loot {
    this.cr = cr;
    this.isGroup = isGroup;

    console.log(this.isGroup);
    if (!this.isGroup) {
      this.individualCoinGenerator();
    } else {
      this.hoardLootGenerator();
    }

    return this.loot;
  }

  private individualCoinGenerator(): void {
    const roll = this.die100.roll();
    switch (this.cr) {
      case 1:
      case 2:
      case 3:
      case 4:
        if (roll <= 30) {
          this.loot.coins.push(CoinFactory.create(5, 6, CoinType.Copper));
        } else if (roll <= 60) {
          this.loot.coins.push(CoinFactory.create(4, 6, CoinType.Silver));
        } else if (roll <= 70) {
          this.loot.coins.push(CoinFactory.create(3, 6, CoinType.Electrum));
        } else if (roll <= 95) {
          this.loot.coins.push(CoinFactory.create(3, 6, CoinType.Gold));
        } else {
          this.loot.coins.push(CoinFactory.create(1, 6, CoinType.Platinum));
        }
        break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        if (roll <=30) {
          this.loot.coins.push(CoinFactory.create(4, 6, CoinType.Copper, 100));
          this.loot.coins.push(CoinFactory.create(1, 6, CoinType.Electrum, 10));
        } else if (roll <= 60) {
          this.loot.coins.push(CoinFactory.create(6, 6, CoinType.Silver, 10));
          this.loot.coins.push(CoinFactory.create(2, 6, CoinType.Gold, 10));
        } else if (roll <= 70) {
          this.loot.coins.push(CoinFactory.create(3, 6, CoinType.Electrum, 10));
          this.loot.coins.push(CoinFactory.create(2, 6, CoinType.Gold, 10));
        } else if (roll <= 95) {
          this.loot.coins.push(CoinFactory.create(4, 6, CoinType.Gold, 10));
        } else {
          this.loot.coins.push(CoinFactory.create(2, 6, CoinType.Gold, 10));
          this.loot.coins.push(CoinFactory.create(3, 6, CoinType.Platinum));
        }
        break;
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
        if (roll <= 20) {
          this.loot.coins.push(CoinFactory.create(4, 6, CoinType.Copper, 100));
          this.loot.coins.push(CoinFactory.create(1, 6, CoinType.Gold, 10));
        } else if (roll <= 35) {
          this.loot.coins.push(CoinFactory.create(1, 6, CoinType.Electrum, 100));
          this.loot.coins.push(CoinFactory.create(1, 6, CoinType.Gold, 10));
        }
        else if (roll <= 75) {
          this.loot.coins.push(CoinFactory.create(2, 6, CoinType.Gold, 100));
          this.loot.coins.push(CoinFactory.create(1, 6, CoinType.Platinum, 10));
        } else {
          this.loot.coins.push(CoinFactory.create(2, 6, CoinType.Gold, 100));
          this.loot.coins.push(CoinFactory.create(2, 6, CoinType.Platinum, 10));
        }
        break;
      default:
        if (roll <= 15) {
          this.loot.coins.push(CoinFactory.create(2, 6, CoinType.Electrum, 1000));
          this.loot.coins.push(CoinFactory.create(8, 6, CoinType.Gold, 100));
        } else if (roll <= 55) {
          this.loot.coins.push(CoinFactory.create(1, 6, CoinType.Gold, 1000));
          this.loot.coins.push(CoinFactory.create(1, 6, CoinType.Platinum, 1000));
        } else {
          this.loot.coins.push(CoinFactory.create(1, 6, CoinType.Gold, 1000));
          this.loot.coins.push(CoinFactory.create(2, 6, CoinType.Platinum, 100));
        }
        break;
    }
  }

  private hoardLootGenerator(): void {
    this.hoardCoinGenerator();
    this.hoardTreasureGenerator();
  }

  private hoardCoinGenerator(): void {
    if (this.cr === null) {
      throw new Error("CR is null");
    }

    if (this.cr <= 4) {
      this.loot.coins.push(CoinFactory.create(6, 6, CoinType.Copper, 100));
      this.loot.coins.push(CoinFactory.create(3, 6, CoinType.Gold, 10));
    }
    else if (this.cr <= 10) {
      this.loot.coins.push(CoinFactory.create(2, 6, CoinType.Copper, 100));
      this.loot.coins.push(CoinFactory.create(2, 6, CoinType.Silver, 1000));
      this.loot.coins.push(CoinFactory.create(6, 6, CoinType.Gold, 100));
      this.loot.coins.push(CoinFactory.create(3, 6, CoinType.Platinum, 10));
    }
    else if (this.cr <= 16) {
      this.loot.coins.push(CoinFactory.create(4, 6, CoinType.Gold, 1000));
      this.loot.coins.push(CoinFactory.create(5, 6, CoinType.Platinum, 100));
    }
    else {
      this.loot.coins.push(CoinFactory.create(12, 6, CoinType.Gold, 1000));
      this.loot.coins.push(CoinFactory.create(8, 6, CoinType.Platinum, 1000));
    }
  }

  private hoardTreasureGenerator(): void {
    if (this.cr === null) {
      throw new Error("CR is null");
    }

    if (this.cr <= 4) {
      this.hoardTreasureGeneratorCr4();
    } else if (this.cr <= 10) {
      this.hoardTreasureGeneratorCr10();
    } else if (this.cr <= 16) {
      this.hoardTreasureGeneratorCr16();
    } else {
      this.hoardTreasureGeneratorCr17();
    }
  }

  private hoardTreasureGeneratorCr4(): void {
    let gemRolls: number = 0;
    let artRolls: number = 0;
    let magicRolls: number = 0;
    let gpValue: number = 0;
    let magicItemTable: string | null = null;

    let roll: number = this.die100.roll();
    switch (roll) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        break;
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
      case 16:
        gemRolls = this.die6.roll(2);
        gpValue = 10;
        break;
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
      case 23:
      case 24:
      case 25:
      case 26:
        artRolls = this.die4.roll(2);
        gpValue = 25;
        break;
      case 27:
      case 28:
      case 29:
      case 30:
      case 31:
      case 32:
      case 33:
      case 34:
      case 35:
      case 36:
        gemRolls = this.die6.roll(2);
        gpValue = 50;
        break;
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
        gemRolls = this.die4.roll(2);
        gpValue = 10;
        magicRolls = this.die6.roll();
        magicItemTable = 'a';
        break;
      case 45:
      case 47:
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
        artRolls = this.die4.roll(2);
        gpValue = 25;
        magicRolls = this.die6.roll();
        magicItemTable = 'a';
        break;
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
      case 58:
      case 59:
      case 60:
        gemRolls = this.die6.roll(2);
        gpValue = 50;
        magicRolls = this.die6.roll();
        magicItemTable = 'a';
        break;
      case 61:
      case 62:
      case 63:
      case 64:
      case 65:
        gemRolls = this.die6.roll(2);
        gpValue = 50;
        magicRolls = this.die6.roll();
        magicItemTable = 'a';
        break;
      case 66:
      case 67:
      case 68:
      case 69:
      case 70:
        artRolls = this.die4.roll();
        gpValue = 25;
        magicRolls = this.die4.roll();
        magicItemTable = 'b';
        break;
      case 71:
      case 72:
      case 73:
      case 74:
      case 75:
        gemRolls = this.die6.roll(2);
        gpValue = 50;
        magicRolls = this.die4.roll();
        magicItemTable = 'b';
        break;
      case 76:
      case 77:
      case 78:
        gemRolls = this.die6.roll(2);
        gpValue = 10;
        magicRolls = this.die4.roll();
        magicItemTable = 'c';
        break;
    case 79:
    case 80:
        artRolls = this.die4.roll(2);
        gpValue = 25;
        magicRolls = this.die4.roll();
        magicItemTable = 'c';
        break;
      case 81:
      case 82:
      case 83:
      case 84:
      case 85:
        gemRolls = this.die6.roll(2);
        gpValue = 50;
        magicRolls = this.die4.roll();
        magicItemTable = 'c';
        break;
      case 86:
      case 87:
      case 88:
      case 89:
      case 90:
      case 91:
      case 92:
        artRolls = this.die4.roll(2);
        gpValue = 25;
        magicRolls = this.die4.roll();
        magicItemTable = 'f';
        break;
      case 93:
      case 94:
      case 95:
      case 96:
      case 97:
        gemRolls = this.die6.roll(2);
        gpValue = 50;
        magicRolls = this.die4.roll();
        magicItemTable = 'f';
        break;
      case 98:
      case 99:
        artRolls = this.die4.roll(2);
        gpValue = 50;
        magicRolls = 1;
        magicItemTable = 'g';
        break;
      case 100:
        gemRolls = this.die6.roll(2);
        gpValue = 50;
        magicRolls = 1;
        magicItemTable = 'g';
        break;
    }

    for (let i = 0; i < gemRolls; i++) {
      this.loot.treasures.push(GemFactory.create(gpValue));
    }

    for (let i = 0; i < artRolls; i++) {
      this.loot.treasures.push(ArtworkFactory.create(gpValue));
    }

    for (let i = 0; i < magicRolls; i++) {
      if (magicItemTable === null) {
        break;
      }

      this.loot.treasures.push(MagicItemFactory.create(magicItemTable));
    }
  }

  private hoardTreasureGeneratorCr10(): void {
    throw new Error("Method not implemented.");
  }

  private hoardTreasureGeneratorCr16(): void {
    throw new Error("Method not implemented.");
  }

  private hoardTreasureGeneratorCr17(): void {
    throw new Error("Method not implemented.");
  }
}