import { Person } from "./../src/galactic-age.js"

describe("Person", () => {
  
  let person1;

  beforeEach (() => {
    person1 = new Person(32, "male", false, true);
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

describe ("Person", () => {
  test("Should return base life expectency for person male, active, non-smoker", () => {
    let person1 = new Person(32, "male", true, false);
    person1.lifeExpectancy(); 
    expect(person1.baseLifeExpectancy).toEqual(82);
  });
  test("Should return base life expectancy for person female, active, non-smoker", () => {
    let person1 = new Person(32, "female", true, false);
    person1.lifeExpectancy(); 
    expect(person1.baseLifeExpectancy).toEqual(87);
  });
  test("Should return base life expectancy for person male, non-active, non-smoker", () => {
    let person1 = new Person(32, "male", false, false);
    person1.lifeExpectancy();
    expect(person1.baseLifeExpectancy).toEqual(78);
  });
  test("Should return base life expectancy for person female, non-active, non-smoker", () => {
    let person1 = new Person(32, "female", false, false);
    person1.lifeExpectancy();
    expect(person1.baseLifeExpectancy).toEqual(83);
  });
  test("Should return base life expectancy for person male, non-active, smoker", () => {
    let person1 = new Person(32, "male", false, true);
    person1.lifeExpectancy();
    expect(person1.baseLifeExpectancy).toEqual(74);
  }); 
  test("Should return base life expectancy for person female, non-active, smoker", () => {
    let person1 = new Person(32, "female", false, true);
    person1.lifeExpectancy();
    expect(person1.baseLifeExpectancy).toEqual(79);
  });
  test("Should return base life expectancy for person male, active, smoker", () => {
    let person1 = new Person(32, "male", true, true);
    person1.lifeExpectancy();
    expect(person1.baseLifeExpectancy).toEqual(78);
  });
  test("Should return base life epectancy for person female, active, smoker", () => {
    let person1 = new Person(32, "female", true, true);
    person1.lifeExpectancy(); 
    expect(person1.baseLifeExpectancy).toEqual(83);
  });
  test("Should return a message stating that a person has lived past their demographically average life expectancy, and tell them by how many years", () => {
    let person1 = new Person(104, "male", false, true); 
    expect(person1.lifeExpectancy()).toEqual("You have lived 30 earth years past the average life expectancy of your demographic. How ghoulish."); 
    expect(person1.outLived).toEqual(true);
    expect(person1.lifeExpDiff).toEqual(30);
  });
  test("Should return a message stating the number of years that a person has left on their demographically determined earth life expectancy", () => {
    let person1 = new Person(32, "male", false, true);
    expect(person1.lifeExpectancy()).toEqual("At a population level, people who align with you along the narrow demographic criteria by which we tabulate our indices would expect, on average, to live for another 42 years. We apologize for the ghoulishly deterministic finality we have assigned to you.");
    expect(person1.outLived).toEqual(false);
    expect(person1.lifeExpDiff).toEqual(42); 
  });
  test("Should return a message informing the user that our models indicate that they should die this year", () => {
    let person1 = new Person(83, "female", true, true);
    expect(person1.lifeExpectancy()).toEqual("At a population level, people who align with you along the narrow demographic criteria by which we tabulate our indices would expect, on average, to die this earth year. We hope that this won't cause you to direct resentment either towards us or towards our methods, which are sound...and evidence based. There are always exceptions, except when there aren't, and when it comes to mortality, everyone eventually reverts to the mean, which is dead. Good luck!");
    expect(person1.lifeExpDiff).toEqual(0);
    expect(person1.outLived).toEqual(true); 
  });
  test("Should return years of life expectancy remaining, in terms of each of the planetary years, for a person who has not outlived their earthly life expectancy", () => {
    let person1 = new Person(32, "male", false, true); 
    person1.lifeExpectancy();
    person1.galacticLifeExpectancy();  
    expect(person1.earthYearsLeft).toEqual(42);
    expect(person1.mercuryYearsLeft).toEqual(175);
    expect(person1.venusYearsLeft).toEqual(68);
    expect(person1.marsYearsLeft).toEqual(22);
    expect(person1.jupiterYearsLeft).toEqual(4);
  });
  test("should return years lived beyond expectancy, in terms of each planetary year-unit, for someone who has outlived their estimated average expectancy according to demographics", () => {
    let person1 = new Person(104, "male", false, true); 
    person1.lifeExpectancy(); 
    person1.galacticLifeExpectancy(); 
    expect(person1.earthYearsOver).toEqual(30);
    expect(person1.mercuryYearsOver).toEqual(125);
    expect(person1.venusYearsOver).toEqual(48);
    expect(person1.marsYearsOver).toEqual(16);
    expect(person1.jupiterYearsOver).toEqual(3);
  });

});

