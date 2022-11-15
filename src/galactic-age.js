export class Person {
  constructor (age, gender, active, smoker) {
    this.earthAge = age;
    this.mercuryAge = Math.floor(this.earthAge/0.24);
    this.venusAge = Math.floor(this.earthAge/0.62);
    this.marsAge = Math.floor(this.earthAge/1.88);
    this.jupiterAge = Math.floor(this.earthAge/11.86);
    this.gender = gender; 
    this.active = active; 
    this.smoker = smoker;
  }

  lifeExpectancy () {
    if (this.gender === "male") {
      this.baseLifeExpectancy = 82;
    } else {
      this.baseLifeExpectancy = 87; 
    }
    if (this.active === false) {
      this.baseLifeExpectancy = Math.round(this.baseLifeExpectancy * 0.95);
    } 
    if (this.smoker === true) {
      this.baseLifeExpectancy = Math.round(this.baseLifeExpectancy * 0.95);
    }
    if (this.earthAge>this.baseLifeExpectancy) {
      this.outLived = true;
      this.lifeExpDiff = this.earthAge-this.baseLifeExpectancy;
      return `You have lived ${this.lifeExpDiff} earth years past the average life expectancy of your demographic. How ghoulish.`;
    }
    else if (this.earthAge<this.baseLifeExpectancy) {
      this.outLived = false;
      this.lifeExpDiff = this.baseLifeExpectancy - this.earthAge;
      return `At a population level, people who align with you along the narrow demographic criteria by which we tabulate our indices would expect, on average, to live for another ${this.lifeExpDiff} years. We apologize for the ghoulishly deterministic finality we have assigned to you.`;
    }
  }
}
