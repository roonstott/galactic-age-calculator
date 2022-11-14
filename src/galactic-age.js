export class Person {
  constructor (age) {
    this.earthAge = age;
    this.mercuryAge = Math.floor(this.earthAge/0.24);
    this.venusAge = Math.floor(this.earthAge/0.62);
    this.marsAge = Math.floor(this.earthAge/1.88);
    this.jupiterAge = Math.floor(this.earthAge/11.86);
  }
}

