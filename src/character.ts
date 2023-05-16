export class Character {
  serie: string;
  name: string;
  family: string;
  age: number;
  status: string;
  speech: string;
  constructor(name: string, family: string, age: number) {
    this.serie = "GOT";
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = "alive";
    this.speech = "";
  }

  goDie() {
    this.status = "dead";
    return this.status;
  }

  communicate() {
    return this.speech;
  }
}
