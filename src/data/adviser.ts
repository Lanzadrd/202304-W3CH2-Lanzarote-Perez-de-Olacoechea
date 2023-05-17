import { Character } from "./character.ts";

export class Adviser extends Character {
  characterToAdvise: string;
  constructor(
    name: string,
    family: string,
    age: number,
    characterToAdvise: string
  ) {
    super(name, family, age);
    this.status = "alive";
    this.characterToAdvise = characterToAdvise;
    this.speech = "No sé por qué, pero creo que voy a morir pronto";
  }
}
