import { hi } from './util';
// import { Point } from './Point'; // destructured or "named" import, NAMED import is more common
import Point2D, { isItTheSameSpot } from './Point2D'; // default import
import Line2D from './Line2D'; // default import
import Point3D from './Point3D' // default import
import Line3D from './Line3D' // default
import readExcel from './ExcelReader';

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
// const point = new Point(true);
// point.exists();

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
const personNew: Person = { age: 35, name: 'Asdf' }
console.log(`Logger: ${greetNew(personNew)}`)
const personNewWithAPlane: Person = { age: 65, name: 'Qwerty', airplane: true }
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
console.log(`Logger[Person]: ${greetNew(employedPerson)}`)
function greetNewNew(person: EmployedPerson) { // TODO: update to list all
    return `\nThis is a person with a name: ${person.name}` +
        `\nAnd an age: ${person.age}. ` +
        `${person.airplane ? '\nHas an airplane.' : ''}` +
        `\nAnd has a salary of: ${person.salary}` +
        `\nAnd was employed at: ${person.dateOfEmployment}`;  // template string `` with inner variable `${}`
}
console.log(`Logger[EmployedPerson]: ${greetNewNew(employedPerson)}`)
console.log('\n\n\\Kraj lekcije')


console.log('\n\n\\Klase')

// KEYWORD class <your class name> {//code for the class...}
class Point { }

// TO USE A CLASS, USE WITH A NEW - KEYWORD new
const p = new Point();
const o = {};
console.log(`p: ${p}, type: ${typeof p}, JSON: ${JSON.stringify(p)}`)
console.log(`p: ${o}, type: ${typeof o}, JSON: ${JSON.stringify(o)}`)

// TS EXPECTS A CONSTRUCTOR!!!
// class Point2D {
//     x: number;
//     y: number;
// }

// TS EXPECTS A CONSTRUCTOR!!!
// const p2d = new Point2D();


console.log('with constructors: \n');

// example class implements interface:
interface Pingable {
    ping(): void;
}

// Useless object, just to see that interface and object aint the same thing
const pingable = {
    ping: function ping() { console.log('ping') }
}


interface Pongable {
    pong(): void;
}

class Sonar implements Pingable, Pongable {
    ping(): void { console.log("ping!"); }
    pong(): void { console.log("pong!"); }
}

const sonar = new Sonar()
sonar.ping()
sonar.pong()
// ^- END interface plus class 

// How to extend a class without parameters:
class Animal {
    move() {
        console.log("Moving along!");
    }
}

const someAnimal = new Animal();
console.log(someAnimal)
someAnimal.move();

class Dog extends Animal {
    woof(times: number) {
        // for is a KEYWORD, used to make a loop 
        // e.g. repeat code in the brackets n times
        for (let i = 0; i < times; i++) {
            console.log('woof!')
        }
    }
    // Overrides, if we want to do it...
    // move() {
    //     console.log("Moving fast!!!");
    // }
}

const dog1 = new Dog();
console.log(dog1); // .eslintrc
dog1.move();
dog1.woof(2);

// ^--- end how to extend class w/o parameters

// How to extend class with parameters and constructors + super:
enum Sizes { 'tiny', 'small', 'medium', 'large', 'huge' }
// const tiny = 'tiny'; const small = 'small'; ...
// const availableSizes = [tiny, small, ...]
// read more @ https://www.typescriptlang.org/docs/handbook/enums.html

// CSR is a short of ConsTructoR, random name.
class AnimalCsr {
    size: Sizes;
    constructor(size: Sizes) {
        this.size = size
    }
    move() {
        console.log("Moving along!");
    }
}

const someAnimalCsr = new AnimalCsr(Sizes.medium);
console.log(someAnimalCsr)
someAnimalCsr.move();

class DogCsr extends AnimalCsr { // .eslintrc will say if we need to type in if it is public or...
    public name: string; // public modifier so i can dog1.name = something...
    age: number; // without public it will be as if i written it, but i didn't
    constructor(name: string, age: number, size: Sizes) {
        super(size);
        this.name = name;
        this.age = age;
    }
    public woof(times: number) {
        // for is a KEYWORD, used to make a loop 
        // e.g. repeat code in the brackets n times
        for (let i = 0; i < times; i++) {
            console.log('woof!')
        }
    }
    // Overrides, if we want to do it...
    // move() {
    //     console.log("Moving fast!!!");
    // }
}

const dogCsr1 = new DogCsr('black', 3, Sizes.small);
console.log(dogCsr1);
// dogCsr1.name = 'black'
dogCsr1.age = 3
// dogCsr1.move();
dogCsr1.woof(2);
const dogCsr2 = new DogCsr('green', 7, Sizes.small);
console.log(dogCsr2);
const mapOfSizesToString = {
    [Sizes.tiny]: 'a tiny animal',
    [Sizes.small]: 'a small animal',
    [Sizes.medium]: 'a medium animal',
    [Sizes.large]: 'a large animal',
    [Sizes.huge]: 'a huge animal',
}
console.log(`dogCsr2 has a size of ${mapOfSizesToString[dogCsr2.size]}`);


// ^--- END how to extend class with parameters and constructors + super

// TO MAKE AN INSTANCE, IS TO USE NEW WITH A CONSTRUCTOR
const p2D = new Point2D();
console.log(`p: ${p2D}, type: ${typeof p2D}, JSON: ${JSON.stringify(p2D)}, position: ${p2D.position()}`)

const p2DNewBoth = new Point2D(1, 10);
console.log(`p: ${p2DNewBoth}, type: ${typeof p2DNewBoth}, JSON: ${JSON.stringify(p2DNewBoth)}, position: ${p2DNewBoth.position()}`)

console.log(`Points p2D and p2DNewBoth are the same: ${isItTheSameSpot(p2D, p2DNewBoth)}`);

const p2DNewWithX = new Point2D(1);
console.log(`p: ${p2DNewWithX}, type: ${typeof p2DNewWithX}, JSON: ${JSON.stringify(p2DNewWithX)}, position: ${p2DNewWithX.position()}`)

const p2DNewWithY = new Point2D(undefined, 1);
console.log(`p: ${p2DNewWithY}, type: ${typeof p2DNewWithY}, JSON: ${JSON.stringify(p2DNewWithY)}, position: ${p2DNewWithY.position()}`)

const l1 = new Line2D(p2D, p2DNewBoth);
console.log(l1.toString());
const l2 = new Line2D(p2DNewWithX, p2DNewWithY);
console.log(l2.toString());

// Idea about STATIC, is WHO is going to call it
// only class can call static method e.g. the BigLetterThing
const isL1GreaterThanL2 = Line2D.compareLines(l1, l2);
console.log(`Line l1 is greater than l2: ${isL1GreaterThanL2}`);

// NEW TOPIC ABOUT MODULES:
console.log('\nNEW TOPIC ABOUT MODULES\n');

const p3d = new Point3D(0, 0, 0);

console.log(`p3d instance of the Point3D class: ${p3d.position()}`);



const p1 = new Point3D(0, 0, 0);
console.log(`p1: ${p1}, position: ${p1.position()}`)

const p2 = new Point3D(0, 2, 4);
const p3 = new Point3D(0, 1, 1);
const p4 = new Point3D(0, 11, 22);

const l3d1 = new Line3D(p1, p2);
const l3d2 = new Line3D(p3, p4);

console.log(`line l1 has greater length than line l2: ${Line3D.compareLines(l3d1, l3d2)}`)
readExcel();
