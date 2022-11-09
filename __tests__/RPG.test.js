import {Character} from "./../src/RPG.js"

describe("Character", () => {
  test("Should create a new character class object", () => {
    let player1 = new Character(0);
    expect(player1.strength).toEqual(0);
  })
})