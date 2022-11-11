export class Game {
  constructor() {
    this.opponent1 = new Opponent("goblin", 2, 5);
    this.character;
  }

  battle(character, opponent) {
    character.characterAttack(opponent);
    if (opponent.health <= 0) {
      return "you have vanquished your opponent";
    }
    opponent.opponentAttack(character);
    if (character.health <= 0) {
      return "you are dead";
    }
  }
}


export class Character {
  constructor() {
    this.charLevel = 1;
    this.name;
    this.strength = this.charLevel * 2;
    this.defense = this.charLevel * 2;
    this.xp = 0;
    this.health = 100;
    this.inventory = [];
  }
  levelUp() {
    if (this.xp >= 100) {
      this.xp = this.xp - 100;
      this.charLevel += 1;
      this.health = 100;
    }
  }

  characterAttack(opponent) {
    if (this.health > 0) {
      if (opponent.health > 0) {
        opponent.health -= this.strength;
      } else {
        // return "You vanquished your opponent";
      }
    } else {
      // return "You are dead";
    }
  }

}

export class Opponent {
  constructor(name, strength, health) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.xpReward = health;
  }
  opponentAttack(character) {
    if (this.health > 0) {
      if (character.health > 0) {
        character.health = (character.health - this.strength);
      } else {
        //display game over message
      }
    }
  }
}