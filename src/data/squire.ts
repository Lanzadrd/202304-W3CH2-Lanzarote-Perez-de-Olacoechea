import { Character } from "./character.js";

export class Squire extends Character {
  characterToServe: string;
  assSucker: number;
  constructor(name: string, family: string, age: number, assSucker: number) {
    super(name, family, age);
    this.status = "alive";
    this.characterToServe = "warrior";
    this.assSucker = assSucker;
    this.speech = "Soy un loser";
  }
}
