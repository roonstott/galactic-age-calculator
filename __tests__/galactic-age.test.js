import { Person } from "./../src/galactic-age.js"

describe("Game", () => {
  
  let person1;

  beforeEach (() => {
    person1 = new Person(32);
  });

  test("Should create an instance of the person class with earthAge property", () => {
    expect(person1.earthAge).toEqual(32);
  });
  test("Should return a mercuryAge for person with given earthAge", () => {
    person1.galacticAge();
    expect(person1.mercuryAge).toEqual(133);
  });
  test("Should return a venusAge", () => {
    person1.galacticAge();
    expect(person1.venusAge).toEqual(51)
  });
  test("Should return a marsAge", () => {
    person1.galacticAge();
    expect(person1.marsAge).toEqual(17);
  });

});

