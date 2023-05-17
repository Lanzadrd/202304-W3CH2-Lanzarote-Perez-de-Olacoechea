import { Character } from "./character.ts";

export class Warrior extends Character {
  weapon: string;
  skill: number;
  constructor(
    name: string,
    family: string,
    age: number,
    weapon: string,
    skill: number
  ) {
    super(name, family, age);
    this.status = "alive";
    this.weapon = weapon;
    this.skill = skill;
    this.speech = "Primero pego y luego pregunto";
  }
}
