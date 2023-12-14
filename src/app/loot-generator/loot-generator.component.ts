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

import { Component } from '@angular/core';
import { CoinType } from './enums/coin.enum';
import { TreasureType } from './enums/treasure.enum';
import { Loot } from './models/loot.model';
import { TreasureGenerator } from './services/treasure-generator.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Coin } from './models/coin.model';
import { ICoin } from './interfaces/coin.interface';
import { Treasure } from './models/treasure.model';

@Component({
  selector: 'app-loot-generator',
  templateUrl: './loot-generator.component.html',
  styleUrls: ['./loot-generator.component.css']
})
export class LootGeneratorComponent {
  private generator: TreasureGenerator = new TreasureGenerator();

  public challengeRating: number = 1;
  public groupLoot: boolean = false;
  public displayedColumns: string[] = ['coin', 'amount']
  public displayTreasureColumns: string[] = ['treasure', 'name', 'value']
  public loot: Loot = new Loot();

  constructor(
    private clipboard: Clipboard,
    private snackBar: MatSnackBar) {}

  public getCoinName(coinType: CoinType): string {
    return CoinType[coinType];
  }

  public getTreasureTypeName(treasureType: TreasureType): string {
    return TreasureType[treasureType];
  }

  public generateLoot(): void {
    console.log("Generate called");
    console.log(`Options: Cr: ${this.challengeRating} Group: ${this.groupLoot}`)
    this.clear();
    this.loot = this.generator.Generate(this.challengeRating, this.groupLoot);
  }

  public clear(): void {
    this.loot.coins = [];
    this.loot.treasures = [];
  }

  public onCopyToClipboardClick(): void {
    let data: string = this.loot.toString();
    console.log(data);
    const pending = this.clipboard.beginCopy(data);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      if (!result && --remainingAttempts) {
        setTimeout(attempt);
      } else {
        this.snackBar.open('Loot copied to clipboard', 'Copied!', {duration: 2000});
        pending.destroy();
      }
    };
    attempt();
  }

  public onSellClick(): void {
    let coin: ICoin | undefined;

    this.loot.coins.forEach((c) => {
      if (c.type === CoinType.Gold) {
        coin = c;
      };
    })

    if (coin === undefined) {
      coin = new Coin(CoinType.Gold, 0);
      this.loot.coins.push(coin);
    }

    let soldAmount: number = 0;
    for (let i = this.loot.treasures.length - 1; i >= 0; i--) {
      console.log(`At index ${i}`);
      if (this.loot.treasures[i].value > 0){
        let removed = this.loot.treasures.splice(i, 1);
        if (removed.length > 0) {
          console.log(`Removed: ${removed[0].value}, ${removed[0].name}, length is now ${this.loot.treasures.length}`);
          coin.amount += removed[0].value;
          soldAmount += removed[0].value;
        } else {
          console.log(`Didn't remove element`);
        }
      }
    }


    if (soldAmount > 0) {
      this.snackBar.open(`Loot sold for ${soldAmount} gp`, 'Loot Sold!', {duration: 2000});
      this.refreshTableHack()
    } else {
      this.snackBar.open('No loot to sell', 'No loot sold!', {duration: 2000});
    }
  }

  public onConvertToGoldClick(): void {
    let gold: Coin = new Coin(CoinType.Gold, 0);
    this.loot.coins.forEach(c => {
      switch(c.type) {
        case CoinType.Copper:
          gold.amount += gold.amount + (Math.floor(c.amount / 100));
          c.amount = c.amount % 100;
          break;
        case CoinType.Silver:
          gold.amount += gold.amount + (Math.floor(c.amount / 10));
          c.amount = c.amount % 10;
          break;
        case CoinType.Gold:
          gold.amount += c.amount;
          break;
        case CoinType.Platinum:
          gold.amount += gold.amount + c.amount * 10;
          c.amount = 0;
          break;
        case CoinType.Electrum:
          gold.amount += gold.amount + c.amount * 2;
          c.amount = 0;
          break;
      }
    })

    this.loot.coins.some(c => {
      if (c.type === CoinType.Gold) {
        c.amount = gold.amount;
      }
    })

    this.snackBar.open(`All currency converted to Gold`, 'Currency Converted!', {duration: 2000});
    this.refreshTableHack();
  }

  // Temporary hack to get around MatTables not refreshing
  // https://stackoverflow.com/questions/34947154/angular-2-viewchild-annotation-returns-undefined
  // https://material.angular.io/components/table/overview#1-write-your-mat-table-and-provide-data
  private refreshTableHack(): void {
      this.loot.coins = this.loot.coins.sort((a, b) => a.type - b.type);
      let coins: Coin[] = [...this.loot.coins];
      let treasures: Treasure[] = [... this.loot.treasures];
      this.loot.coins = [];
      this.loot.coins = [...coins];

      this.loot.treasures = [];
      this.loot.treasures = [...treasures];

  }
}


