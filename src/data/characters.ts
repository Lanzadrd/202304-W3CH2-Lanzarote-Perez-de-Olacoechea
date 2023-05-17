import { King } from "./king.ts";
import { Warrior } from "./warrior.ts";
import { Adviser } from "./adviser.ts";
import { Squire } from "./squire.ts";

export const createCharacters = () => {
  const charactersList = [];

  charactersList.push(new King("Joffrey", "Baratheon", 36, 7));
  charactersList.push(new Warrior("Jaime", "Lannister", 28, "sword", 7));
  charactersList.push(new Warrior("Daenerys", "Targaryen", 27, "sword", 9));
  charactersList.push(new Adviser("Tyrion", "Lannister", 31, "Daenerys"));
  charactersList.push(new Squire("Bronn", "Lollys Stokeworth", 32, 8));

  return charactersList;
};
