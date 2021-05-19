import { hi } from './util';
import { Point } from './Point';

const message: string = "Hello World!";
const small = message.toLowerCase();
console.log(`small ${small}`);

// for primitives its not that important...
const newMessage: string = "Hello New World!";
console.log(`NEW BIG: ${newMessage.toUpperCase()}`); // string template


// initialize TS number
const newNumer: number = 5;
console.log(`newNumer: ${newNumer}`); // string template
// initialize TS boolean
const newBoolean: boolean = false;
console.log(`newBoolean: ${newBoolean}`); // string template

// now run it 'npm run start' and see if it appears in the console!
/**
small hello world!
NEW BIG: HELLO NEW WORLD!
newNumer: 5
newBoolean: false
*/


// Arithmetic Operators

let x = 0;
console.log(`x = 0; ${x}`)
x = x + newNumer; // = 5
console.log(`x = x + newNumer; ${newNumer}`)
x += newNumer; // = 10
console.log(`x += newNumer; ${newNumer}`)
// const notANum = '5';
// x = x + notANum; // Type 'string' is not assignable to type 'number'.ts(2322)
x = x++;
console.log(`x++; ${newNumer}`)
x = x--;
console.log(`x--; ${newNumer}`)

const xGtNewNum = x > newNumer;
console.log(`xGtNewNum; ${xGtNewNum}`);

// Functions
// internet example: function function_name (param1[:type], param2?[:type]): returnType
//                   KEYWORD  <arbitrary>   (parameter [:optionalParamType], parameterOptional2? [:string]): typeOfReturn
function ourLoggerFunction(a: string, b?: string): void { console.log('ourLoggerFunction', a, b) }
// function ourLoggerFunctionVanilla (a, b) {}
ourLoggerFunction('log this');
ourLoggerFunction('log and this', 'optional that');

function mySumFunction(a: number = 0, b: number = 0): number { return a + b }
const result0 = mySumFunction(1, 2);
console.log(`mySumFunction(1,2); ${result0}`);
const result1 = mySumFunction(1);
console.log(`mySumFunction(1); ${result1}`);

// Arrays
// const arr = [1, 2, 3]; // vanilla js
const arr: Array<number> = [1, 2, 3]; // TypeScript
// const arr: number[] = [1, 2, 3]; // TypeScript, this is valid too!!!

// Tuple != Array, looks the same tho
const tup: Array<string | number> = [1, 'number two', 3];
// const tup: (string|number)[] = [1, 'number two', 3];
console.log(`tup; ${tup}`);
tup.pop();
console.log(`tup.pop(); ${tup}`);

// Interfaces
//keyword nam { param: type; nextParam: nextType }
interface Cat {
    age: number;
    name: string;
    // meow: () => void
}

const cat: Cat = {
    age: 5,
    name: 'Black'
}

hi();
const point = new Point(true);
point.exists();

console.log('\n\n\nNova lekcija')

console.log('\n\n\nAnonimni interfejs')
function greet(person: { name: string; age: number }) {
    return `This is a person with a name: ${person.name} and an age: ${person.age}`;
}

const person: {
    name: string;
    age: number;
} = { name: 'Ime', age: 25 }

console.log(`Logger: ${greet(person)}`) // Template Strings

console.log('\n\n\nDeklarisani interfejs')
interface Person {
    name: string;
    age: number;
    airplane?: boolean;
}
// TERNARY operator ?
function greetNew(person: Person) {
    return `This is a person with a name: ${person.name} and an age: ${person.age}. ${person.airplane ? 'Has an airplane.' : ''}`; // template string `` with inner variable `${}`
}
const personNew: Person = {age: 35, name: 'Asdf'}
console.log(`Logger: ${greetNew(personNew)}`)
const personNewWithAPlane: Person = {age: 65, name: 'Qwerty', airplane: true}
console.log(`Logger: ${greetNew(personNewWithAPlane)}`)

interface Employee {
    salary: number;
    securityLevel?: number;
}

interface EmployedPerson extends Person, Employee {
    dateOfEmployment?: string;
}

const employedPerson: EmployedPerson = {
    age: 44,
    name: 'Zxcvb',
    salary: 900000,
    airplane: true,
    dateOfEmployment: '25/05/1999.'
}
console.log(`Logger: ${greetNew(employedPerson)}`)

console.log('\n\n\\Kraj lekcije')