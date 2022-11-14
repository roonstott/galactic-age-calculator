import { Person } from "./../src/galactic-age.js"

describe("Game", () => { 
  test("Should create an instance of the person class with earthAge property", () => {
    let person1 = new Person(32);
    expect(person1.earthAge).toEqual(32);
  });
  test("Should return a mercuryAge for person with given earthAge", () => {
    let person1 = new Person(32); 
    person1.galacticAge();
    expect(person1.mercuryAge).toEqual(133);
  });

});

