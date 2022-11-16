# _Galactic Age Calculator_

#### By _**Robert Onstott**_

#### _Galactic Age Calculator is a set of business logic that will take the input of a person's age, and will return the equivalent number of solar years that they have lived on different planets in our solar system. It will also take basic demographic information and return an average life expectancy in earth years as well as the other planet's solar years._

## Technologies Used

* _Node.js/NPM_
* _Webpack_
* _ES Lint_
* _Github_
* _Babel_
* _Jest_

## Description

_This program will generate a Person object based on the user's inputted age, and will also collect basic life expectancy predictors, such as the person's gender, whether they smoke or not, and whether they lead an active lifestyle. It will use this information to add properties to the Person object. It converts their age from Earth solar years to the solar years of Mercury, Venus, Mars, and Jupiter. It also uses a simple formula to predict a remainiing life expectancy for the Person, and it returns that life expectancy in Earth years, as well as Mercury, Venus, Mars, and Jupiter years. If, by chance, the person has outlived their computed life expectancy, it does not return negative life expectancies. Instead, it informs them that they have outlived the average lifespan for their demographic, and it tells them by how much, in terms of each of the planetary solar-year units of time._

## Setup/Installation Requirements

* _Clone the repository from github_
* _The project was written with the VS Code editor, so it is recommended to use the same to view and edit the code_
* _Use NPM to install the dependencies_
  `$ npm install`
* _Build the webpack module_
  `$ npm run build`
* _View and edit the code in VS Code_
* _There is no User Interface Logic in this project, so to use/test the functionality you will have to create a Person object within the galactic-age.js file, call both the lifeExpectancy() and the galacticLifeExpectancy() methods, and then console.log the Person object. The lifeExpectancy() method returns a message, so you can console.log(lifeExpectancy()) to receive some apologetic text explaining the regrettable determinism of life expectancy calculations, generally. You will have to delete the 'export' tag the the front of the class declarations statement, the first word in the file. To test in Jest, you will have to replace that word._
  
  `let person1 = new Person(33, "female", true, true);
    console.log(person1.lifeExpectancy());
    person1.galacticLifeExpectancy();  
    console.log(person1);`

    `galactic-age-calculator $ node./src/galactic-age.js`

## Known Bugs

* _To run code in the file, you must delete the 'export' declaration at the top of the galactic-age.js file. It is needed for Jest testing _

## License

_MIT_

Copyright (c) _Nov 2022_ _Robert Onstott_

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.