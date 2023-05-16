import { Character } from "./character.ts";

export class King extends Character {
  regnalYears: number;
  constructor(name: string, family: string, age: number, regnalYears: number) {
    super(name, family, age);
    this.status = "alive";
    this.regnalYears = regnalYears;
    this.speech = "Vais a morir todos";
  }
}
