import { Character, Opponent, Game } from "./../src/RPG.js"

describe("Game", () => {
  test("Should create a game object with player name property", () => {
    let game1 = new Game("Theodore");
    expect(game1.playerName).toEqual("Theodore");
  });
  test("Should return 'you have vanquished your opponent' and a lower opponent health", () => {
    let game1 = new Game("Theodore");
    let goblin = new Opponent("goblin",2,5);
    let character1 = new Character("bob");
    let outcome = game1.battle(character1, goblin);
    expect(outcome).toEqual("you have vanquished your opponent");
    expect(character1.health).toEqual(96);
  })
});


describe("Character", () => {
  test("Should create a new character class object with name 'Beatrix' and default stats", () => {
    let player1 = new Character("Beatrix");
    expect(player1.name).toEqual("Beatrix");
    expect(player1.strength).toEqual(2);
    expect(player1.defense).toEqual(2);
    expect(player1.xp).toEqual(0);
    expect(player1.health).toEqual(100);
    expect(player1.charLevel).toEqual(1);
    expect(player1.inventory).toEqual([]);


  });

  test("Should add 1 level when xp reaches over 100", () => {
    let player1 = new Character("Bo");
    let player2 = new Character("Beatrix");
    player1.xp = 100;
    player1.levelUp();
    player2.xp = 50;
    expect(player1.charLevel).toEqual(2);
    expect(player2.charLevel).toEqual(1);
    expect(player1.xp).toEqual(0);
    expect(player2.xp).toEqual(50);
  });

  test("Should harm the opponent, but only if the character has health", () => {
    let goblin = new Opponent("goblin",2,5);
    let player1 = new Character("bob");
    player1.characterAttack(goblin);
    expect(goblin.health).toEqual(3);
  })

});

describe("Opponent", () => {
  test("should create a new opponent object", () => {
    let highRob = new Opponent("Highway Robber", 2, 5);
    expect(highRob.name).toEqual("Highway Robber");
    expect(highRob.strength).toEqual(2);
    expect(highRob.health).toEqual(5);
    expect(highRob.xpReward).toEqual(5);
  })
  test("Opponent Attack player function", () => {
    let goblin = new Opponent("goblin",2,5);
    let player1 = new Character("bob");
    goblin.opponentAttack(player1);
    expect(player1.health).toEqual(98);
  });
});