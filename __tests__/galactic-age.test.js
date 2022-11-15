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
    expect(person1.mercuryAge).toEqual(133);
  });
  test("Should return a venusAge", () => {
    expect(person1.venusAge).toEqual(51)
  });
  test("Should return a marsAge", () => {
    expect(person1.marsAge).toEqual(17);
  });
  test("Should return a jupiterAge", () => {
    expect(person1.jupiterAge).toEqual(2);
  });
  test("Should return person properties for life expectancy", () => {
    expect(person1.gender).toEqual("male");
    expect(person1.active).toEqual(false);
    expect(person1.smoker).toEqual(true);
  });

});


