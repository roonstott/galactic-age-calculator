export class Game {
  constructor (playerName) {
    this.playerName = playerName
  }

  battle(opponent) {
    
  }

}


export class Character {
  constructor(name){
    this.charLevel = 1;
    this.name = name;
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
}

export class Opponent {
  constructor (name, strength, health) {
    this.name = name;
    this.strength = strength;
    this.health = health;
    this.xpReward = health;
  }
}