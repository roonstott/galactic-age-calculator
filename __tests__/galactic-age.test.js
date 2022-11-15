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
    let person1= new Person(32, "male", false, false);
    person1.lifeExpectancy();
    expect(person1.baseLifeExpectancy).toEqual(78);
  });
  test("Should return base life expectancy for person female, non-active, non-smoker", () => {
    let person1= new Person(32, "female", false, false);
    person1.lifeExpectancy();
    expect(person1.baseLifeExpectancy).toEqual(83);
  });
  test("Should return base life expectancy for person male, non-active, smoker", () => {
    let person1= new Person(32, "male", false, true);
    person1.lifeExpectancy();
    expect(person1.baseLifeExpectancy).toEqual(74);
  }); 
  test("Should return base life expectancy for person female, non-active, smoker", () => {
    let person1= new Person(32, "female", false, true);
    person1.lifeExpectancy();
    expect(person1.baseLifeExpectancy).toEqual(79);
  });
  test("Should return base life expectancy for person male, non-active, non-smoker", () => {
    let person1= new Person(32, "male", false, false);
    person1.lifeExpectancy();
    expect(person1.baseLifeExpectancy).toEqual(78);
  }); 
});

