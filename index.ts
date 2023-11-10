// Import stylesheets
import './style.css';

let a = { a: 1, b: 2 };
let b = a;
b.a = 2;

console.log(a === b);

/**
 * Imperative programming: is more about describing the detailed steps the program
 * must take to achieve the desired result. It focuses on the "how".
 *
 * Declarative programming: Is more about describing the desired result without
 * listening the steps needed to achieve the result. It focuses on the what.
 */

function loop() {
  const array = [1, 2, 3, 4, 5];

  // Imperative Approach
  for (const i of array) {
    console.log(i); // Output: 1 2 3 4 5
  }

  console.log('');

  // Declarative Approach using forEach
  array.forEach((v) => console.log(v)); // Output: 1 2 3 4 5
}
// loop();

function doublingEachValueInAnArray() {
  const array = [1, 2, 3, 4, 5];

  // Imperative Approach
  let doubledImperative = [];
  for (let i = 0; i < array.length; i++) {
    doubledImperative.push(array[i] * 2);
  }
  console.log('Imperative:', doubledImperative);

  // Declarative Approach
  const doubledDeclarative = array.map((value) => value * 2);
  console.log('Declarative', doubledDeclarative, array);
}
// doublingEachValueInAnArray();

function filteringNumbersInAnArray() {
  const array = [1, 2, 3, 4, 5];

  // Imperative Approach
  let evenNumbersImperative = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumbersImperative.push(array[i]);
    }
  }
  console.log('Imperative', evenNumbersImperative);

  // Declarative Approach
  const evenNumbersDeclarative = array
    .map((value) => value * 2)
    .filter((value) => value % 2 === 0);
  console.log('Declarative', evenNumbersDeclarative);
}
// filteringNumbersInAnArray();

function summingAllValuesInAnArray() {
  const array = [1, 2, 3, 4, 5];

  // Imperative Approach
  let sumImperative = 0;
  for (let i = 0; i < array.length; i++) {
    sumImperative += array[i];
  }
  console.log('Imperative', sumImperative);

  // Declarative Approach
  const sumDeclarative = array
    .filter((value) => value % 2 === 0)
    .reduce((acc, value) => acc * value, 1);
  console.log('Declarative', sumDeclarative);
}
// summingAllValuesInAnArray();

function findItemWithPredicate() {
  const array = [1, 2, 3, 4, 5];

  // Imperative Approach
  let firstGreaterThanThreeImperative;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 3) {
      firstGreaterThanThreeImperative = array[i];
      break;
    }
  }
  console.log('Imperative', firstGreaterThanThreeImperative);

  // Declarative Approach
  const firstGreaterThanThreeDeclarative = array.find((value) => value > 3);
  console.log('Declarative', firstGreaterThanThreeDeclarative);
}
// findItemWithPredicate();

function alterObject() {
  const objectArray = [{ value: 1 }, { value: 2 }, { value: 3 }];

  // Imperative Approach
  let doubledPropertyImperative = [];
  for (let i = 0; i < objectArray.length; i++) {
    doubledPropertyImperative.push({ value: objectArray[i].value * 2 });
  }
  console.log('Imperative', doubledPropertyImperative);

  // Declarative Approach
  const doubledPropertyDeclarative = objectArray.map((obj) => ({
    value: obj.value * 2,
  }));
  console.log('Declarative', doubledPropertyDeclarative);
}
// alterObject();

function checkIfEveryElementMeetsACondition() {
  const array = [1, 2, 3, 4, 5];

  // Imperative Approach
  let allPositiveImperative = true;
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= 0) {
      allPositiveImperative = false;
      break;
    }
  }
  console.log('Imperative', allPositiveImperative);

  // Declarative Approach
  const allPositiveDeclarative = array.every((value) => value > 0);
  console.log('Declarative', allPositiveDeclarative);
}
//checkIfEveryElementMeetsACondition();

function checkIfSomeElementsMeetsACondition() {
  const array = [1, 3, 5, 7, 8, 9];

  // Imperative Approach
  let hasEvenNumberImperative = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      hasEvenNumberImperative = true;
      break;
    }
  }
  console.log('Imperative', hasEvenNumberImperative); // Output: true

  // Declarative Approach using some
  const hasEvenNumberDeclarative = array.some((value) => value % 2 === 0);
  console.log('Declarative', hasEvenNumberDeclarative); // Output: true
}
// checkIfSomeElementsMeetsACondition();

function combineArrayElements() {
  const array = [1, 2, 3, 4, 5];

  // Imperative Approach
  let combinedStringImperative = '';
  for (let i = 0; i < array.length; i++) {
    combinedStringImperative += array[i].toString();

    if (i < array.length - 1) {
      combinedStringImperative += ',';
    }
  }
  console.log('Imperative', combinedStringImperative);

  // Declarative Approach
  const combinedStringDeclarative = array.join(',');
  console.log('Declarative', combinedStringDeclarative);
}
// combineArrayElements();

function doubleTheValueOfEachElement() {
  const array = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  // Imperative Approach
  let resultImperative = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      resultImperative.push(array[i][j] * 2);
    }
  }
  console.log('Imperative', resultImperative);

  // Declarative Approach using flatMap
  const resultDeclarative = array.flat().sort;
  console.log('Declarative', resultDeclarative);
}
doubleTheValueOfEachElement();
