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
  }

}
