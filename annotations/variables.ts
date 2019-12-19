let apples: number = 5;
let speed: string = 'fast';

let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//build in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'gray', 'black'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, true, false];

//Classes
class Car {
}

let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log('-- i', i);
};

//When to use annotations
//1) function that return the 'any' type
const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log('-- coordinates', coordinates);
//2) When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0, len = words.length; i < len; i++) {
  let w = words[i];
  if (w === 'green') {
    foundWord = true;
  }
}

//3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0, len = numbers.length; i <len; i++) {
  let n = numbers[i];
  if (n > 0) {
    numberAboveZero = n;
  }
}
