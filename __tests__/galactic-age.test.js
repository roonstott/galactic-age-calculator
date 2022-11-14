import { Person } from "./../src/galactic-age.js"

describe("Game", () => { 
  test("Should create an instance of the person class with age property", () => {
    let person1 = new Person(32);
    expect(person1.earthAge).toEqual(32);
  });

});

