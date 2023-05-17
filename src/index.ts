import { Card } from "./components/card";
import { List } from "./components/list";
import { createCharacters } from "./data/characters";

const characters = createCharacters();

new List("#app");

characters.forEach((Character) => {
  new Card("ul", Character);
});
