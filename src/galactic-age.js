export class Person {
  constructor (age) {
    this.earthAge = age;
  }
  galacticAge() {
    this.mercuryAge = Math.floor(this.earthAge/0.24);
    this.venusAge = Math.floor(this.earthAge/0.62);
  }
}

