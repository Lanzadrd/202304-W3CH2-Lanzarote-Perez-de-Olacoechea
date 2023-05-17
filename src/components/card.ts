import { Adviser } from "../data/adviser";
import { King } from "../data/king";
import { Squire } from "../data/squire";
import { Warrior } from "../data/warrior";
import { Component } from "./component";

export class Card extends Component {
  constructor(selector: string, Character: King | Warrior | Adviser | Squire) {
    super(selector);
    this.template = this.createTemplate(Character);
    this.render();
  }

  createTemplate(Character: King | Warrior | Adviser | Squire) {
    const renderDifferences = (
      character: King | Warrior | Adviser | Squire
    ) => {
      if ("regnalYears" in character) {
        return `
    <li>Años de reinado: ${character.regnalYears}</li>`;
      }

      if ("weapon" in character) {
        return `
     <li>Arma: ${character.weapon}</li>
     <li>Destreza: ${character.skill}</li>`;
      }

      if ("characterToServe" in character) {
        return `
    <li>Sirve a: ${character.characterToServe}</li>
    <li>Peloteo: ${character.assSucker}</li>`;
      }

      if ("characterToAdvise" in character) {
        return `
    <li>Peloteo a: ${character.characterToAdvise}</li>`;
      }
    };

    return `
          <li class="character col">
            <div class="card character__card">
              <img src="img/${Character.name.toLowerCase()}.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
              <div class="card-body">
          <h2 class="character__name card-title h4">${Character.name} ${
      Character.family
    }</h2>
          <div class="character__info">
          <ul class="list-unstyled">
          <li>Edad: ${Character.age} años</li>
          <li>
          Estado:
          <i class="fas fa-thumbs-down"></i>
          <i class="fas fa-thumbs-up"></i>
          </li>
          </ul>
          </div>
          <div class="character__overlay">
          <ul class="list-unstyled">
          ${renderDifferences(Character)}
          </ul>
          <div class="character__actions">
          <button class="character__action btn">habla</button>
          <button class="character__action btn">muere</button>
          </div>
          </div>
          </div>
              <i class="emoji"></i>
           </div>
          </li>
  `;
  }
}
