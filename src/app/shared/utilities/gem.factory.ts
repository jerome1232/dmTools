import { TreasureType } from "src/app/loot-generator/enums/treasure.enum";
import { Treasure } from "src/app/loot-generator/models/treasure.model";
import { Dice } from "./dice.utility";

/**
 * Factory which creates gems
 */
export class GemFactory {
  /**
   * Type of treasure to generate (always gems)
   */
  private static get TYPE(): TreasureType { return TreasureType.Gemstone; }

  /**
   * Creates Gems of given value.
   * @param value GP value of the gem to generate.
   * @returns A new gem of stated value.
   */
  static create(value: number): Treasure {
    let gemStone: Treasure = new Treasure();
    switch (value) {
      case 10:
        gemStone = this.gen10gpGem();
        break;
      case 50:
        gemStone = this.gen50gpGem();
        break;
      case 100:
        gemStone = this.gen100gpGem();
        break;
      case 500:
        gemStone = this.gen500gpGem();
        break;
      case 1000:
        gemStone = this.gen1000gpGem();
        break;
      case 5000:
        gemStone = this.gen5000gpGem();
        break;
    }
    return gemStone;
  }

  /**
   * Generate a 10 gp value gemstone
   * @returns 10 gp value gemstone
   */
  private static gen10gpGem(): Treasure {
    let die: Dice = new Dice(12);
    let roll = die.roll();
    let name: string = '';
    const value: number = 10;

    switch (roll) {
      case 1:
        name = "Azurite (Opaque mottled deep blue)";
        break;
      case 2:
        name = "Banded agate (Translucent striped brown blue, white, or red)";
        break;
      case 3:
        name = "Blue quartz (Transparent pale blue)";
        break;
      case 4:
        name = "Eye agate (Trasnlucent circles of gray, white, brown, blue, or green";
        break;
      case 5:
        name = "Hematite (Opaque gray-black)";
        break;
      case 6:
        name = "Lapis Lazuli (Opaque light and dark blue with yellow flecks)";
        break;
      case 7:
        name = "Malachite (Opaque striated light and dark green)";
        break;
      case 8:
        name = "Moss agate (Translucent pink or yellow-white with mossy gray or green markings)";
        break;
      case 9:
        name = "Obsidian (Opaque black)";
        break;
      case 10:
        name = "Rhodochrosite (Opaque light pink)";
        break;
      case 11:
        name = "Tiger eye (Translucent brown with golden center";
        break;
      case 12:
        name = "Turquoise (Opaque light blue-green)";
        break;
    }

    return new Treasure(this.TYPE, name, value);
  }

  /**
   * Generate a 50 gp value gemstone
   * @returns 50 gp value gemstone
   */
  private static gen50gpGem(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(12);
    let roll: number = die.roll();
    const value: number = 50;

    switch (roll)
    {
      case 1:
        name = "Bloodstone (Opaque dark gray with red flecks)";
        break;
      case 2:
        name = "Carnelian (Opaque orange to red-brown)";
        break;
      case 3:
        name = "Chalcedony (Opaque white)";
        break;
      case 4:
        name = "Chrysoprase (Translucent green)";
        break;
      case 5:
        name = "Citrine (Transparent pale yellow-brown)";
        break;
      case 6:
        name = "Jasper (Opaque blue, black, or brown)";
        break;
      case 7:
        name = "Moonstone (Translucent white with pale blue glow)";
        break;
      case 8:
        name = "Onyx (Opaque bands of black and white, or pure black or white)";
        break;
      case 9:
        name = "Quartz (Transparent white, smokey gray, or yellow)";
        break;
      case 10:
        name = "Sardonyx (Opaque bands of red and white)";
        break;
      case 11:
        name = "Star rose quartz (Translucent rosy stone with white star-shaped center)";
        break;
      case 12:
        name = "Zircon (Transparent pale blue-green)";
        break;
    }

    return new Treasure(this.TYPE, name, value);
  }

  /**
   * Generate a 100 gp value gemstone
   * @returns 100 gp value gemstone
   */
  private static gen100gpGem(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(10);
    let roll = die.roll();
    const value: number = 100;

    switch (roll)
    {
      case 1:
          name = "Amber (Transparent deep purple)";
          break;
      case 2:
          name = "Amethyst (Transparent deep purple)";
          break;
      case 3:
          name = "Chrysoberyl (Transparent yellow-green to pale green)";
          break;
      case 4:
          name = "Coral (Opaque crimson)";
          break;
      case 5:
          name = "Garnet (Transparent red, brown-green, or violet)";
          break;
      case 6:
          name = "Jade (Translucent light green, deep green, or white)";
          break;
      case 7:
          name = "Jet (Opaque deep black)";
          break;
      case 8:
          name = "Pearl (Opaque lustrous white, yellow, or pink)";
          break;
      case 9:
          name = "Spinel (Transparent red, red-brow, or deep green)";
          break;
      case 10:
          name = "Tourmaline (Transparent pale green, blue, brown, or red)";
          break;
    }

    return new Treasure(this.TYPE, name, value);
  }

  /**
   * Generate a 500 gp value gemstone
   * @returns 500 gp value gemstone
   */
  private static gen500gpGem(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(6);
    let roll = die.roll();
    const value: number = 500;

    switch (roll)
    {
      case 1:
        name = "Alexandrite (Transperent dark green)";
        break;
      case 2:
        name = "Aquamarine (Transparent pale blue-green)";
        break;
      case 3:
        name = "Black pearl (Opaque pure black)";
        break;
      case 4:
        name = "Blue spinel (Transparent deep blue)";
        break;
      case 5:
        name = "Peridot (Transparent rich olive green)";
        break;
      case 6:
        name = "Topaz Transparent golden yellow";
        break;
    }

    return new Treasure(this.TYPE, name, value);
  }

  /**
   * Generate a 1000 gp value gemstone
   * @returns 1000 gp value gemstone
   */
  private static gen1000gpGem(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(8);
    let roll: number = die.roll();
    const value: number = 1000;

    switch (roll)
    {
      case 1:
        name = "Black opal (Translucent dark green with black mottling and golden flecks)";
        break;
      case 2:
        name = "Blue sapphire (Transparent blue-white to medium blue)";
        break;
      case 3:
        name = "Emerald (Transparent deep bright green)";
        break;
      case 4:
        name = "Fire opal (Translucent fiery red)";
        break;
      case 5:
        name = "Opal (Translucent pale blue with green and golden mottling)";
        break;
      case 6:
        name = "Star ruby (Translucent pale blue with green and golden mottling)";
        break;
      case 7:
        name = "Star sapphire (Translucent blue sapphire with white star-shaped center)";
        break;
      case 8:
        name = "Yellow sapphire (Transparent fiery yellow or yellow-green)";
        break;
    }

    return new Treasure(this.TYPE, name, value);
  }

  /**
   * Generate a 5000 gp gemstone
   * @returns 5000 gp gemstone
   */
  private static gen5000gpGem(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(4);
    let roll: number = die.roll();
    const value: number = 5000;

    switch (roll)
    {
      case 1:
        name = "Black sapphire (Translucent lustrous black with glowing highlights)";
        break;
      case 2:
        name = "Diamond (Transparent blue-white, canary, pink, brown, or blue)";
        break;
      case 3:
        name = "Jacinth (Transparent fiery orange)";
        break;
      case 4:
        name = "Ruby (Transparent clear red to deep crimson)";
        break;
    }

    return new Treasure(this.TYPE, name, value);
  }
}
