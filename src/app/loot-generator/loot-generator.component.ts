import { Component } from '@angular/core';
import { CoinType } from './enums/coin.enum';
import { TreasureType } from './enums/treasure.enum';
import { Coin } from './models/coin.model';
import { Loot } from './models/loot.model';
import { TreasureGenerator } from './services/treasure-generator.service';

@Component({
  selector: 'app-loot-generator',
  templateUrl: './loot-generator.component.html',
  styleUrls: ['./loot-generator.component.css']
})
export class LootGeneratorComponent {
  public challengeRating: number = 1;
  public groupLoot: boolean = false;
  public displayedColumns: string[] = ['coin', 'amount']
  public displayTreasureColumns: string[] = ['treasure', 'name', 'value']
  private generator: TreasureGenerator = new TreasureGenerator();

  loot: Loot = new Loot();

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
}


