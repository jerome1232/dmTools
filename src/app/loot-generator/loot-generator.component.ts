import { Component } from '@angular/core';
import { CoinType } from './enums/coin.enum';
import { TreasureType } from './enums/treasure.enum';
import { Coin } from './models/coin.model';
import { Loot } from './models/loot.model';

@Component({
  selector: 'app-loot-generator',
  templateUrl: './loot-generator.component.html',
  styleUrls: ['./loot-generator.component.css']
})
export class LootGeneratorComponent {
  public challengeRating: number = 1;
  public groupLoot: boolean = false;
  public displayedColumns: string[] = ['coin', 'amount', 'action']
  public displayTreasureColumns: string[] = ['treasure', 'name', 'value', 'action']

  loot: Loot = new Loot();

  public getCoinName(coinType: CoinType): string {
    return CoinType[coinType];
  }

  public getTreasureTypeName(treasureType: TreasureType): string {
    return TreasureType[treasureType];
  }

  public generateLoot(): void {
    console.log("Generate called");
    this.loot.coins.push({type: CoinType.Copper, amount: 3 });
    this.loot.coins.push({type: CoinType.Gold, amount: 32});

    this.loot.treasures.push({type: TreasureType.ArtWork, name: 'Mona Lisa', value: 300})
    this.loot.treasures.push({type: TreasureType.Gemstone, name: 'Quarts', value: 300})
  }

  public clear(): void {
    this.loot.coins = [];
    this.loot.treasures = [];
  }
}


