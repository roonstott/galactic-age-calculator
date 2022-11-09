import {Character} from "../src/RPG.js"

describe("Character", () => {
  test("Should create a new character class object", () => {
    const player1 = class Character {};
    expect(player1.strength.toEqual(0));
  })
})