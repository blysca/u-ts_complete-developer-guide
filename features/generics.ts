class ArrayOfNumbers {
  constructor(public collection: number[]) {
  }
  
  get (index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {
  }
  
  get (index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {
  }
  
  get (index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything<string>(['a', 'b', 'c']);

// Examples of generics with functions

function printStrings(arr: string[]) {
  for (let i = 0, len = arr.length; i < len; i++) {
    let arguments = arr[i];
    console.log('*** string =  ', arguments);
  }
}

function printNumbers(arr: number[]) {
  for (let i = 0, len = arr.length; i < len; i++) {
    let arguments = arr[i];
    console.log('*** string =  ', arguments);
  }
}
function printAnything<T>(arr: T[]) {
  for (let i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);

// Generic Constraints

class Car {
  print () {
    console.log('i am a car');
  }
}

class House {
  print () {
    console.log('i am a house');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]) {
  for (let i = 0, len = arr.length; i < len; i++) {
    arr[i].print();
  }
}

// printHousesOrCars([1, 2, 4]);
printHousesOrCars<House>([new House(), new House()]);
printHousesOrCars<Car>([new Car(), new Car()]);
