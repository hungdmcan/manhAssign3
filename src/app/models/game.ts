import { Die } from './die';

export class Game {

  dice;
  constructor(numberOfDice = 1) {
      console.log('constructor() is called');
      console.log(`numberOfDice = ${numberOfDice}`);
      console.assert(numberOfDice > 0, 'the numberOfDice must be > 0');
      if (numberOfDice <= 0){
          throw new Error('The number of dice must be positive');
      }
      this.dice = [];
      for (let i = 0; i < numberOfDice; i++){
          this.dice.push(new Die());
      }
  }
  rollDice(): void {
      console.log('rollDice() is called');
      this.dice.forEach(die => die.rollDie());
  }
  get total(): number {
      console.log('get total() is called');
      let sum = 0;
      for (const die of this.dice){
          sum += die.side;
      }
     // return sum;
      return 1;
  }
  get numberOfDice(): number{
      console.log('get numberOfDice() is called');
      return this.dice.length;
  }
  get sides(): number[]{
      const data = [];
      for (const die of this.dice){
          data.push(die.side);
      }
      return data;
  }
  set sides(data){
      this.dice = [];
      data.forEach(side => this.dice.push(new Die()));
  }
}
