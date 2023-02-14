import { TreasureType } from "src/app/loot-generator/enums/treasure.enum";
import { Treasure } from "src/app/loot-generator/models/treasure.model";
import { Dice } from "./dice.utility";

/**
 * Factory to produce magic items
 */
export class MagicItemFactory {
  /**
   * Type of treasure to generate (always Magic Items)
   */
  private static get TYPE(): TreasureType { return TreasureType.MagicItem; }

  /**
   * Creates Magic Items from a give table.
   * @param table, the table to use to generate item
   * @returns A new magic item
   */
  static create(table: string): Treasure {
    let magicItem: Treasure = new Treasure();
    switch (table)
    {
      case 'a':
        magicItem = this.magicItemFactoryTableA();
        break;
      case 'b':
        magicItem = this.magicItemFactoryTableB();
        break;
      case 'c':
        magicItem = this.magicItemFactoryTableC();
        break;
      case 'd':
        magicItem = this.magicItemFactoryTableD();
        break;
      case 'e':
        magicItem = this.magicItemFactoryTableE();
        break;
      case 'f':
        magicItem = this.magicItemFactoryTableF();
        break;
      case 'g':
        magicItem = this.magicItemFactoryTableG();
        break;
      case 'h':
        magicItem = this.magicItemFactoryTableH();
        break;
      case 'i':
        magicItem = this.magicItemFactoryTableI();
        break;
    }

    return magicItem;
  }

  /**
   * Create a magic item from table A
   * @returns A new Magic item generated from table A
   */
  private static magicItemFactoryTableA(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(100);
    let roll = die.roll();

    if (roll <= 50) {
      name = "Potion of healing";
    } else if (roll <= 60) {
      name = "Spell scroll (cantrip)";
    } else if (roll <= 70) {
      name = "Potion of climbing";
    } else if (roll <= 90) {
      name = "Spell scroll (1st level)";
    } else if (roll < 94) {
      name = "Spell scroll (2nd level)";
    } else if (roll < 99) {
      name = "Potion of greater healing";
    } else if (roll === 99) {
      name = "Bag of holding";
    } else {
      name = "Driftglobe";
    }

    return new Treasure(this.TYPE, name, 0);
  }

  /**
   * Generate a magic item from table B
   * @returns A new magic item from table B
   */
  private static magicItemFactoryTableB(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(100);
    let roll = die.roll();

    switch (roll)
    {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        name = "Potion of greater healing";
        break;
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
        name = "Potion of fire breath";
        break;
      case 23:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
      case 29:
        name = "Potion of resistance";
        break;
      case 30:
      case 31:
      case 32:
      case 33:
      case 34:
        name = "Ammunition, +1";
        break;
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
        name = "Potion of Animal Friendship";
        break;
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
        name = "Potion of Hill Giant Strength";
        break;
      case 45:
      case 46:
      case 47:
      case 48:
      case 49:
        name = "Potion of growth";
        break;
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
        name = "Potion of water breathing";
        break;
      case 55:
      case 56:
      case 57:
      case 58:
      case 59:
        name = "Spell scroll (2nd level)";
        break;
      case 60:
      case 61:
      case 62:
      case 62:
      case 64:
        name = "Spell scroll (3rd level)";
        break;
      case 65:
      case 66:
      case 67:
        name = "Bag of holding";
        break;
      case 68:
      case 69:
      case 70:
        name = "Keoghtom's ointment";
        break;
      case 71:
      case 72:
      case 73:
        name = "Oil of slipperiness";
        break;
      case 74:
      case 75:
        name = "Dust of disappearance";
        break;
      case 76:
      case 77:
        name = "Dust of dryness";
        break;
      case 78:
      case 79:
        name = "Dust of sneezing and choking";
        break;
      case 80:
      case 81:
        name = "Elemental gem";
        break;
      case 82:
      case 83:
        name = "Philter of love";
        break;
      case 84:
        name = "Alchemy jug";
        break;
      case 85:
        name = "Cap of water breathing";
        break;
      case 86:
        name = "Cloak of the manta ray";
        break;
      case 87:
        name = "Driftglobe";
        break;
      case 88:
        name = "Goggles of night";
        break;
      case 89:
        name = "Helm of comprehending languages";
        break;
      case 90:
        name = "Immovable Rob";
        break;
      case 91:
        name = "Lantern of revealing";
        break;
      case 92:
        name = "Mariner's armor";
        break;
      case 93:
        name = "Mithril armor";
        break;
      case 94:
        name = "Potion of poison";
        break;
      case 95:
        name = "Ring of swimming";
        break;
      case 96:
        name = "Robe of useful items";
        break;
      case 97:
        name = "Rope of climbing";
        break;
      case 98:
        name = "Saddle of the cavalier";
        break;
      case 99:
        name = "Wand of magic detection";
        break;
      case 100:
        name = "Wand of secrets";
        break;
    }

    return new Treasure(this.TYPE, name, 0);
  }

  /**
   * Generate a magic item from table C
   * @returns A new magic item from table C
   */
  private static magicItemFactoryTableC(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(100);
    let roll = die.roll();

    switch (roll)
    {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        name = "Potion of superior healing";
        break;
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
      case 21:
      case 22:
        name = "Spell scroll (4th level)";
        break;
      case 23:
      case 24:
      case 25:
      case 26:
      case 27:
      case 28:
      case 29:
        name = "Ammunition, +2";
        break;
      case 28:
      case 29:
      case 30:
      case 31:
      case 32:
        name = "Potion of clairvoyance";
        break;
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
        name = "Potion of diminution";
        break;
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
        name = "Potion of gaseous form";
        break;
      case 43:
      case 43:
      case 43:
      case 43:
      case 43:
        name = "Potion of frost giant strength";
        break;
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
        name = "Potion of stone giant strength";
        break;
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        name = "Potion of heroism";
        break;
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
        name = "Potion of invulnerability";
        break;
      case 63:
      case 64:
      case 65:
      case 66:
      case 67:
        name = "Potion of mind reading";
        break;
      case 68:
      case 69:
      case 70:
      case 71:
      case 72:
        name = "Spell scroll (5th level)";
        break;
      case 73:
      case 74:
      case 75:
        name = "Elixir of health";
        break;
      case 76:
      case 77:
      case 78:
        name = "Oil of etherealness";
        break;
      case 79:
      case 80:
      case 81:
        name = "Potion of fire giant strength";
        break;
      case 82:
      case 83:
      case 84:
        name = "Quaal's feather token";
        break;
      case 85:
      case 86:
      case 87:
        name = "Scroll of protection";
        break;
      case 88:
      case 89:
        name = "Bag of beans";
        break;
      case 90:
      case 91:
        name = "Bead of force";
        break;
      case 92:
        name = "Chime of opening";
        break;
      case 93:
        name = "Decanter of endless water";
        break;
      case 94:
        name = "Eyes of minute seeing";
        break;
      case 95:
        name = "Folding boat";
        break;
      case 96:
        name = "Heward's handy haversack";
        break;
      case 97:
        name = "Horseshoes of speed";
        break;
      case 98:
        name = "Necklace of fireballs";
        break;
      case 99:
        name = "Periapt of health";
        break;
      case 100:
        name = "Sending stones";
        break;
    }
    return new Treasure(this.TYPE, name, 0);
  }

  /**
   * Generate a magic item from table D
   * @returns A new magic item from table D
   */
  private static magicItemFactoryTableD(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(100);
    let roll = die.roll();

    if (roll <= 20) {
      name = "Potion of supreme healing";
    } else if (roll <= 30) {
      name = "Potion of invisibility";
    } else if (roll <= 40) {
      name = "Potion of speed";
    } else if (roll <= 50) {
      name = "Spell scroll (6th level)";
    } else if (roll <= 57) {
      name = "Spell scroll (7th level)";
    } else if (roll <= 62) {
      name = "Ammunition , +3";
    } else if (roll <= 67) {
      name = "Oil of sharpness";
    } else if (roll <= 72) {
      name = "Potion of flying";
    } else if (roll <= 77) {
      name = "Potion of cloud giant strength";
    } else if (roll <= 82) {
      name = "Potion of longevity";
    } else if (roll <= 87) {
      name = "Potion of vitality";
    } else if (roll <= 92) {
      name = "Spell scroll (8th level)";
    } else if (roll <= 95) {
      name = "Horseshoes of a zephyr";
    } else if (roll <= 98) {
      name = "Nolzur's marvelous pigments";
    } else if (roll === 99) {
      name = "Bag of devouring";
    } else {
      name = "Portable hole";
    }

    return new Treasure(this.TYPE, name, 0);
  }

  /**
   * Generate a magic item from table E
   * @returns A new magic item from table E
   */
  private static magicItemFactoryTableE(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(100);
    let roll = die.roll()

    if (roll <= 30) {
      name = "Spell scroll (8th level)";
    } else if (roll <= 55) {
      name = "Potion of storm giant strength";
    } else if (roll <= 70) {
      name = "potion of supreme healing";
    } else if (roll <= 85) {
      name = "Spell scroll (9th level)";
    } else if (roll <= 93) {
      name = "Universal solvent";
    } else if (roll <= 98) {
      name = "Arrow of slaying";
    } else {
      name = "Sovereign glue";
    }

    return new Treasure(this.TYPE, name, 0);
  }

  /**
   * Generate a magic item from table F
   * @returns A new magic item from table F
   */
  private static magicItemFactoryTableF(): Treasure {
    let name: string = '';
    let die: Dice = new Dice(100);
    let roll = die.roll();

    switch (roll)
    {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
          name = "Weapon, +1";
          break;
      case 16:
      case 17:
      case 18:
          name = "Shield, +1";
          break;
      case 19:
      case 20:
      case 21:
          name = "Sentinel shield";
          break;
      case 22:
      case 23:
          name = "Amulet of proof against detection and location";
          break;
      case 24:
      case 25:
          name = "Boots of elvenkind";
          break;
      case 26:
      case 27:
          name = "Boots of striding and springing";
          break;
      case 28:
      case 29:
          name = "Bracers of archery";
          break;
      case 30:
      case 31:
          name = "Brooch of shielding";
          break;
      case 32:
      case 33:
          name = "Broom of flying";
          break;
      case 34:
      case 35:
          name = "Cloak of elvenkind";
          break;
      case 36:
      case 37:
          name = "Cloak of protection";
          break;
      case 38:
      case 39:
          name = "Gauntlets of ogre power";
          break;
      case 40:
      case 41:
          name = "Hat of disguise";
          break;
      case 42:
      case 43:
          name = "Javelin of lightning";
          break;
      case 44:
      case 45:
          name = "Pearl of power";
          break;
      case 46:
      case 47:
          name = "Rod of the pact keeper, +1";
          break;
      case 48:
      case 49:
          name = "Slippers of spider climbing";
          break;
      case 50:
      case 51:
          name = "Staff of the adder";
          break;
      case 52:
      case 53:
          name = "Staff of the python";
          break;
      case 54:
      case 55:
          name = "Sword of vengeance";
          break;
      case 56:
      case 57:
          name = "Trident of fish command";
          break;
      case 58:
      case 59:
          name = "Wand of magic missiles";
          break;
      case 60:
      case 61:
          name = "Wand of war mage, +1";
          break;
      case 62:
      case 63:
          name = "Wand of web";
          break;
      case 64:
      case 65:
          name = "Weapon of warning";
          break;
      case 66:
          name = "Adamantine armor (chain mail)";
          break;
      case 67:
          name = "Adamantine armor (chain shirt)";
          break;
      case 68:
          name = "Adamantine armor (scale mail)";
          break;
      case 69:
          name = "Bag of tricks (grey)";
          break;
      case 70:
          name = "Bag of tricks (rust)";
          break;
      case 71:
          name = "Bah of trick (tan)";
          break;
      case 72:
          name = "Boots of the winterlands";
          break;
      case 73:
          name = "Circlet of blasting";
          break;
      case 74:
          name = "Deck of illusions";
          break;
      case 75:
          name = "Eversmoking bottle";
          break;
      case 76:
          name = "Eyes of charming";
          break;
      case 77:
          name = "Eyes of the eagle";
          break;
      case 78:
          name = "Figurine of wondrous power (silver raven)";
          break;
      case 79:
          name = "Gem of brightness";
          break;
      case 80:
          name = "Gloves of missile snaring";
          break;
      case 81:
          name = "Gloves of swimming and climbing";
          break;
      case 82:
          name = "Gloves of thievery";
          break;
      case 83:
          name = "Headband of intellect";
          break;
      case 84:
          name = "Helm of telepathy";
          break;
      case 85:
          name = "Instrument of the bards (Doss lute)";
          break;
      case 86:
          name = "Instrument of the bards (Fochlucan bandore)";
          break;
      case 87:
          name = "Instrument of the bards (Mac-Fuimidh cittern)";
          break;
      case 88:
          name = "Medallion of thoughts";
          break;
      case 89:
          name = "Necklace of adaptation";
          break;
      case 90:
          name = "Periapt of wound closure";
          break;
      case 91:
          name = "Pipes of haunting";
          break;
      case 92:
          name = "Pipes of sewers";
          break;
      case 93:
          name = "Ring of jumping";
          break;
      case 94:
          name = "Ring of mind shielding";
          break;
      case 95:
          name = "Ring of warmth";
          break;
      case 96:
          name = "Ring of water walking";
          break;
      case 97:
          name = "Quiver of Ehlonna";
          break;
      case 98:
          name = "Stone of good luck";
          break;
      case 99:
          name = "Wind fan";
          break;
      case 100:
          name = "Winged boots";
          break;
    }

    return new Treasure(this.TYPE, name, 0);
  }

  /**
   * Generate a magic item from table G
   * @returns A new magic item from table G
   */
  private static magicItemFactoryTableG(): Treasure {
    let name: string = '';
    let die100: Dice = new Dice(100);
    let roll = die100.roll();

    switch (roll)
    {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            name = "Weapon, +2";
            break;
        case 12:
        case 13:
        case 14:
            name = "Figurine of wondrous power (see DMG)";
            {
                let die8: Dice = new Dice(8);
                let subRoll = die8.roll();
                switch (subRoll)
                {
                case 1:
                    name += " Bronze griffon";
                    break;
                case 2:
                    name += " Ebony fly";
                    break;
                case 3:
                    name += " Golden lions";
                    break;
                case 4:
                    name += " Ivory goats";
                    break;
                case 5:
                    name += " Marble elephant";
                    break;
                case 6:
                case 7:
                    name += " Onyx dog";
                    break;
                case 8:
                    name += " Serpentine owl";
                    break;
                }
            }
            break;
        case 15:
            name = "Adamantine armor (breastplate)";
            break;
        case 16:
            name = "Adamantine armor (splint)";
            break;
        case 17:
            name = "Amulet of health";
            break;
        case 18:
            name = "Armor of vulnerability";
            break;
        case 19:
            name = "Arrow-catching shield";
            break;
        case 20:
            name = "Belt of dwarvenkind";
            break;
        case 21:
            name = "Belt of hill giant strength";
            break;
        case 22:
            name = "Berserker axe";
            break;
        case 23:
            name = "Boots of levitation";
            break;
        case 24:
            name = "Boots of speed";
            break;
        case 25:
            name = "Bowl of commanding water elementals";
            break;
        case 26:
            name = "Bracers of defense";
            break;
        case 27:
            name = "Brazier of commanding fire elementals";
            break;
        case 28:
            name = "Cape of the mountebank";
            break;
        case 29:
            name = "Censer of controlling air elementals";
            break;
        case 30:
            name = "Armor, +1 chain mail";
            break;
        case 31:
            name = "Amor of resistance (chain mail)";
            break;
        case 32:
            name = "Armor, +1 chain shirt";
            break;
        case 33:
            name = "Armor of resistance (chain shirt)";
            break;
        case 34:
            name = "Cloak of displacement";
            break;
        case 35:
            name = "Cloud of the bat";
            break;
        case 36:
            name = "Cube of force";
            break;
        case 37:
            name = "Daern's instant fortress";
            break;
        case 38:
            name = "Dagger of venom";
            break;
        case 39:
            name = "Dimensional shackles";
            break;
        case 40:
            name = "Dragon slayer";
            break;
        case 41:
            name = "Elven chain";
            break;
        case 42:
            name = "Flame tongue";
            break;
        case 43:
            name = "Gem of seeing";
            break;
        case 44:
            name = "Giant slayer";
            break;
        case 45:
            name = "Glamoured studded leather";
            break;
        case 46:
            name = "Helm of teleportation";
            break;
        case 47:
            name = "Horn of blasting";
            break;
        case 48:
            name = "Horn of Valhalla (silver or brass)";
            break;
        case 49:
            name = "Instrument of the bards (Canaith mandolin)";
            break;
        case 50:
            name = "Instrument of the bards (Cli lyre)";
            break;
        case 51:
            name = "Ioun stone (awareness)";
            break;
        case 52:
            name = "Ioun stone (protection)";
            break;
        case 53:
            name = "Ioun stone (reserve)";
            break;
        case 54:
            name = "Ioun stone (sustenance)";
            break;
        case 55:
            name = "Iron bands of Bilarro";
            break;
        case 56:
            name = "Armor, +1 leather";
            break;
        case 57:
            name = "Amor of resistance (leather)";
            break;
        case 58:
            name = "Mace of disruption";
            break;
        case 59:
            name = "Mace of smiting";
            break;
        case 60:
            name = "Mace of terror";
            break;
        case 61:
            name = "Mantle of spell resistance";
            break;
        case 62:
            name = "Necklace of prayer beads";
            break;
        case 63:
            name = "Periapt of proof against poison";
            break;
        case 64:
            name = "Ring of animal influence";
            break;
        case 65:
            name = "Ring of evasion";
            break;
        case 66:
            name = "Ring of feather falling";
            break;
        case 67:
            name = "Ring of free action";
            break;
        case 68:
            name = "Ring of protection";
            break;
        case 69:
            name = "Ring of resistance";
            break;
        case 70:
            name = "Ring of spell storing";
            break;
        case 71:
            name = "Ring of the ram";
            break;
        case 72:
            name = "Ring of X-ray vision";
            break;
        case 73:
            name = "Robe of eyes";
            break;
        case 74:
            name = "Rod of rulership";
            break;
        case 75:
            name = "Rod of the pact keeper, +2";
            break;
        case 76:
            name = "Rope of entanglement";
            break;
        case 77:
            name = "Armor, +1 scale mail";
            break;
        case 78:
            name = "Armor of resistance (scale mail)";
            break;
        case 79:
            name = "Shield, +2";
            break;
        case 80:
            name = "Shield of missile attraction";
            break;
        case 81:
            name = "Staff of charming";
            break;
        case 82:
            name = "Staff of healing";
            break;
        case 83:
            name = "Staff of swarming insects";
            break;
        case 84:
            name = "Staff of the woodlands";
            break;
        case 85:
            name = "Staff of withering";
            break;
        case 86:
            name = "Stone of controlling earth elementals";
            break;
        case 87:
            name = "Sun blade";
            break;
        case 88:
            name = "Sword of life stealing";
            break;
        case 89:
            name = "Sword of wounding";
            break;
        case 90:
            name = "Tentacle rod";
            break;
        case 91:
            name = "Vicious weapon";
            break;
        case 92:
            name = "Wand of binding";
            break;
        case 93:
            name = "Wand of enemy detection";
            break;
        case 94:
            name = "Wand of fear";
            break;
        case 95:
            name = "Wand of fireballs";
            break;
        case 96:
            name = "Wand of lightning bolts";
            break;
        case 97:
            name = "Wand of paralysis";
            break;
        case 98:
            name = "Wand of the war mage, +2";
            break;
        case 99:
            name = "Wand of wonder";
            break;
        case 100:
            name = "Wings of flying";
            break;
    }

    return new Treasure(this.TYPE, name, 0);
  }

  /**
   * Generate a magic item from table H
   * @returns A new magic item from table H
   */
  private static magicItemFactoryTableH(): Treasure {
    let name: string = '';
    let die100: Dice = new Dice(100);
    let roll = die100.roll();

    switch (roll)
    {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
          name = "Weapon, +3";
          break;
      case 11:
      case 12:
          name = "Amulet of the planes";
          break;
      case 13:
      case 14:
          name = "Carpet of flying";
          break;
      case 15:
      case 16:
          name = "Crystal ball (very rare version)";
          break;
      case 17:
      case 18:
          name = "Ring of regeneration";
          break;
      case 19:
      case 20:
          name = "Ring of shooting stars";
          break;
      case 21:
      case 22:
          name = "Ring of telekinesis";
          break;
      case 23:
      case 24:
          name = "Robe of scintillating colors";
          break;
      case 25:
      case 26:
          name = "Robe of stars";
          break;
      case 27:
      case 28:
          name = "Rod of absorption";
          break;
      case 29:
      case 30:
          name = "Rod of alertness";
          break;
      case 31:
      case 32:
          name = "Rod of security";
          break;
      case 33:
      case 34:
          name = "Rod of the pact keeper, +3";
          break;
      case 35:
      case 36:
          name = "Scimitar of speed";
          break;
      case 37:
      case 38:
          name = "Shield, +3";
          break;
      case 39:
      case 40:
          name = "Staff of fire";
          break;
      case 41:
      case 42:
          name = "Staff of frost";
          break;
      case 43:
      case 44:
          name = "Staff of power";
          break;
      case 45:
      case 46:
          name = "Staff of striking";
          break;
      case 47:
      case 48:
          name = "Staff of thunder and lightning";
          break;
      case 49:
      case 50:
          name = "Sword of sharpness";
          break;
      case 51:
      case 52:
          name = "Wand of polymorph";
          break;
      case 53:
      case 54:
          name = "Wand of war mage, +3";
          break;
      case 55:
          name = "Adamantine armor (half plate)";
          break;
      case 56:
          name = "Adamantine armor (plate)";
          break;
      case 57:
          name = "Animated shield";
          break;
      case 58:
          name = "Belt of fire giant strength";
          break;
      case 59:
          name = "Belt of frost(or stone) giant strength";
          break;
      case 60:
          name = "Armor, +1 breastplate";
          break;
      case 61:
          name = "Armor of resistance (breastplate)";
          break;
      case 62:
          name = "Candle of invocation";
          break;
      case 63:
          name = "Armor, +2 chain mail";
          break;
      case 64:
          name = "Armor, +2 chain shirt";
          break;
      case 65:
          name = "Cloak of arachnidan";
          break;
      case 66:
          name = "Dancing sword";
          break;
      case 67:
          name = "Demon armor";
          break;
      case 68:
          name = "Dragon scale mail";
          break;
      case 69:
          name = "Dwarven plate";
          break;
      case 70:
          name = "Dwarven thrower";
          break;
      case 71:
          name = "Efreeti bottle";
          break;
      case 72:
          name = "figurine of wondrous power(obsidian steed)";
          break;
      case 73:
          name = "Frost brand";
          break;
      case 74:
          name = "Helm of brilliance";
          break;
      case 75:
          name = "Horn of Valhalla";
          break;
      case 76:
          name = "Instrument of the bards (Anstruth harp)";
          break;
      case 77:
          name = "Ioun stone (absorption)";
          break;
      case 78:
          name = "Ioun stone (agility)";
          break;
      case 79:
          name = "Ioun stone (fortitude)";
          break;
      case 80:
          name = "Ioun stone (insight)";
          break;
      case 81:
          name = "Ioun stone (intellect)";
          break;
      case 82:
          name = "Ioun stone (leadership)";
          break;
      case 83:
          name = "Ioun stone (strength)";
          break;
      case 84:
          name = "Armor, +2 leather";
          break;
      case 85:
          name = "Manual of bodily health";
          break;
      case 86:
          name = "Manual of gainful exercise";
          break;
      case 87:
          name = "Manual of golems";
          break;
      case 88:
          name = "Manual of quickness of action";
          break;
      case 89:
          name = "Mirror of life trapping";
          break;
      case 90:
          name = "Nine lives stealer";
          break;
      case 91:
          name = "Oathbow";
          break;
      case 92:
          name = "Armor, +2 scale mail";
          break;
      case 93:
          name = "Spellguard shield";
          break;
      case 94:
          name = "Armor, +1 splint";
          break;
      case 95:
          name = "Armor of resistance (splint)";
          break;
      case 96:
          name = "Armor, +1 (studded leather)";
          break;
      case 97:
          name = "Armor of resistance (studded leather)";
          break;
      case 98:
          name = "Tome of clear thought";
          break;
      case 99:
          name = "Tome of leadership and influence";
          break;
      case 100:
          name = "Tome of understanding";
          break;
    }

    return new Treasure(this.TYPE, name, 0);
  }

  /**
   * Generate a magic item from table I
   * @returns A new magic item from table I
   */
  private static magicItemFactoryTableI(): Treasure {
    let name: string = '';
    let die100: Dice = new Dice(100);
    let roll = die100.roll();

    switch (roll)
    {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
            name = "Defender";
            break;
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
          name = "Hammer of thunderbolts";
          break;
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
          name = "Luck blade";
          break;
      case 16:
      case 17:
      case 18:
      case 19:
      case 20:
          name = "Sword of answering";
          break;
      case 21:
      case 22:
      case 23:
          name = "Holy avenger";
          break;
      case 24:
      case 25:
      case 26:
          name = "Ring of djinni summoning";
          break;
      case 27:
      case 28:
      case 29:
          name = "Ring of invisibility";
          break;
      case 30:
      case 31:
      case 32:
      case 33:
      case 34:
      case 35:
          name = "Rod of lordly might";
          break;
      case 36:
      case 37:
      case 38:
          name = "Staff of the magi";
          break;
      case 39:
      case 40:
      case 41:
          name = "Vorpal sword";
          break;
      case 42:
      case 43:
          name = "Belt of cloud giant strength";
          break;
      case 44:
      case 45:
          name = "Armor, +2 breastplate";
          break;
      case 46:
      case 47:
          name = "Armor, +3 chain mail";
          break;
      case 48:
      case 49:
          name = "Armor, +3 chain shirt";
          break;
      case 50:
      case 51:
          name = "Cloak of invisibility";
          break;
      case 52:
      case 53:
          name = "Crystal ball (legendary version)";
          break;
      case 54:
      case 55:
          name = "Armor, +1 half plate";
          break;
      case 56:
      case 57:
          name = "Iron flask";
          break;
      case 58:
      case 59:
          name = "Armor, +3 leather";
          break;
      case 60:
      case 61:
          name = "Armor, +1 plate";
          break;
      case 62:
      case 63:
          name = "Robe of the archmagi";
          break;
      case 64:
      case 65:
          name = "Rod of resurrection";
          break;
      case 66:
      case 67:
          name = "Armor, +1 scale mail";
          break;
      case 68:
      case 69:
          name = "Scarab of protection";
          break;
      case 70:
      case 71:
          name = "Armor, +2 splint";
          break;
      case 72:
      case 73:
          name = "Armor, +2 studded leather";
          break;
      case 74:
      case 75:
          name = "Well of many worlds";
          break;
      case 76:
          {
            name = "Armor, ";
            let die12: Dice = new Dice(12);
            let subRoll = die12.roll();
            switch (subRoll)
            {
              case 1:
              case 2:
                  name  += "+2 half plate";
                  break;
              case 3:
              case 4:
                  name += "+2 plate";
                  break;
              case 5:
              case 6:
                  name += "+3 studded leather";
                  break;
              case 7:
              case 8:
                  name += "+3 breastplate";
                  break;
              case 9:
              case 10:
                  name += "+3 splint";
                  break;
              case 11:
                  name += "+3 half plate";
                  break;
              case 12:
                  name += "+3 plate";
                  break;
            }
          }
          break;
      case 77:
          name = "Apparatus of Kwalish";
          break;
      case 78:
          name = "Armor of invulnerability";
          break;
      case 79:
          name = "Belt of storm giant strength";
          break;
      case 80:
          name = "Cubic gate";
          break;
      case 81:
          name = "Deck of many things";
          break;
      case 82:
          name = "Efreeti chain";
          break;
      case 83:
          name = "Armor of resistance (half plate)";
          break;
      case 84:
          name = "Horn of Valhalla (iron)";
          break;
      case 85:
          name = "Instrument of the bards (Ollamh harp)";
          break;
      case 86:
          name = "Ioun stone (greater absorption)";
          break;
      case 87:
          name = "Ioun stone (mastery)";
          break;
      case 88:
          name = "Ioun stone (regeneration)";
          break;
      case 89:
          name = "Plate armor of etherealness";
          break;
      case 90:
          name = "Plate armor of resistance";
          break;
      case 91:
          name = "Ring of air elemental command";
          break;
      case 92:
          name = "Ring of earth elemental command";
          break;
      case 93:
          name = "Ring of fire elemental command";
          break;
      case 94:
          name = "Ring of three wishes";
          break;
      case 95:
          name = "Ring of water elemental command";
          break;
      case 96:
          name = "Sphere of annihilation";
          break;
      case 97:
          name = "Talisman of pure good";
          break;
      case 98:
          name = "Talisman of the sphere";
          break;
      case 99:
          name = "Talisman of ultimate evil";
          break;
      case 100:
          name = "Tome of stilled tongue";
          break;
    }

    return new Treasure(this.TYPE, name, 0);
  }
}
