export class Dice {
  private readonly sides: number;

  constructor (sides: number) {
    this.sides = sides;
  }

  public roll(times: number = 1): number {
    let sum: number = 0;
    for (let i = 0; i < times; i++) {
      sum += Math.floor(Math.random() * (this.sides + 1));
    }
    return sum;
  }
}
