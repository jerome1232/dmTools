import { TreasureType } from "src/app/loot-generator/enums/treasure.enum";
import { Treasure } from "src/app/loot-generator/models/treasure.model";
import { Dice } from "./dice.utility";

/**
 * Factory to produce Artwork
 */
export class ArtworkFactory {
  /**
   * Type of treasure to generate (always gems)
   */
  private static get TYPE(): TreasureType { return TreasureType.ArtWork; }

  /**
   * Creates Artwork of given value.
   * @param value GP value of the artwork to generate.
   * @returns A new artwork of stated value.
   */
  public static create(value: number): Treasure {
    let art: Treasure = new Treasure();
    switch (value)
    {
      case 25:
        art = this.gen25gpArt();
        break;
      case 250:
        art = this.gen250gpArt();
        break;
      case 750:
        art = this.gen750gpArt();
        break;
      case 2500:
        art = this.gen2500gpArt();
        break;
      case 7500:
        art = this.gen7500gpArt();
        break;
    }

    return art;
  }

  /**
   * Generates artwork worth 25 gp
   * @returns artwork worth 25 gp
   */
  private static gen25gpArt(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(10);
    let roll = die.roll();
    const value: number = 25;

    switch (roll)
    {
      case 1:
        name = "Silver ewer";
        break;
      case 2:
        name = "Carved bone statuette";
        break;
      case 3:
        name = "Small gold bracelet";
        break;
      case 4:
        name = "Cloth-of-gold vestments";
        break;
      case 5:
        name = "Black velvet mask stitched with silver thread";
        break;
      case 6:
        name = "Copper chalice with silver filigree";
        break;
      case 7:
        name = "Pair of engraved bone dice";
        break;
      case 8:
        name = "Small mirror set in a painted wooden frame";
        break;
      case 9:
        name = "Embroidered silk handkerchief";
        break;
      case 10:
        name = "Gold locket with a painted portrait inside";
        break;
    }

    return new Treasure(this.TYPE, name, value);
  }

  /**
   * Generate artwork worth 250 gp
   * @returns artwork worth 250 gp
   */
  private static gen250gpArt(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(10);
    let roll = die.roll();
    const value = 250;

    switch (roll)
    {
      case 1:
        name = "Gold ring set with bloodstones";
        break;
      case 2:
        name = "Carved ivory statuette";
        break;
      case 3:
        name = "Large gold bracelet";
        break;
      case 4:
        name = "Silver necklace with a gemstone pendant";
        break;
      case 5:
        name = "Bronze crown";
        break;
      case 6:
        name = "Silk robe with gold embroidery";
        break;
      case 7:
        name = "Large well-made tapestry";
        break;
      case 8:
        name = "Brass mug with jade inlay";
        break;
      case 9:
        name = "Box of turquoise animal figurines";
        break;
      case 10:
        name = "Gold bird cage with electrum filigree";
        break;
    }

    return new Treasure(this.TYPE, name, value);
  }

  /**
   * Generate artwork worth 750 gp
   * @returns artwork worth 750 gp
   */
  private static gen750gpArt(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(10);
    let roll = die.roll();
    const value = 750;

    switch (roll)
    {
      case 1:
        name = "Silver chalice set with moonstones";
        break;
      case 2:
        name = "Silver-plated steel longsword with jet set in hilt";
        break;
      case 3:
        name = "Carved harp of exotic wood with ivory inlay and zircon gems";
        break;
      case 4:
        name = "Small gold idol";
        break;
      case 5:
        name = "Gold dragon comb set with red garnets as eyes";
        break;
      case 6:
        name = "Bottle stopper cork embossed with gold leaf and set with amethysts";
        break;
      case 7:
        name = "Ceremonial electrum dagger with a black pearl in the pommel";
        break;
      case 8:
        name = "Silver and gold brooch";
        break;
      case 9:
        name = "Obsidian statuette with gold fittings and inlay";
        break;
      case 10:
        name = "Painted gold war mask";
        break;
    }

    return new Treasure(this.TYPE, name, value);
  }

  /**
   * Generate artwork worth 2500 gp
   * @returns artwork worth 2500 gp
   */
  private static gen2500gpArt(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(10);
    let roll: number = die.roll();
    const value: number = 2500;

    switch (roll)
    {
      case 1:
        name = "Fine gold chain set with a fire opal";
        break;
      case 2:
        name = "Old masterpiece painting";
        break;
      case 3:
        name = "Embroidered silk and velvet mantle set with numerous moonstones";
        break;
      case 4:
        name = "Platinum bracelet set with a sapphire";
        break;
      case 5:
        name = "Embroidered glove set with jewel chips";
        break;
      case 6:
        name = "Jeweled anklet";
        break;
      case 8:
        name = "Gold circlet set with four aquamarines";
        break;
      case 9:
        name = "Eye patch with a mock eye set in blue sapphire and moonstone";
        break;
      case 10:
        name = "A necklace string of small pink pearls";
        break;
    }

    return new Treasure(this.TYPE, name, value);
  }

  /**
   * Generate artwork worth 7500 gp
   * @returns artwork worth 7500 gp
   */
  private static gen7500gpArt(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(8);
    let roll: number = die.roll();
    const value = 7500;

    switch (roll)
    {
      case 1:
        name = "Jeweled gold crown";
        break;
      case 2:
        name = "Jeweled platinum ring";
        break;
      case 3:
        name = "Small gold statuette set with rubies";
        break;
      case 4:
        name = "Gold cup set with emeralds";
        break;
      case 5:
        name = "Gold jewelry box with platinum filigree";
        break;
      case 6:
        name = "Painted gold child's sarcophagus";
        break;
      case 7:
        name = "Jade game board with solid gold playing pieces";
        break;
      case 8:
        name = "Bejeweled ivory drinking horn with gold filigree";
        break;
    }

    return new Treasure(this.TYPE, name, value);
  }
}

