"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
// import { Point } from './Point';
var Point2D_1 = require("./Point2D");
var Line_1 = require("./Line"); // destructure
var Line3D_1 = __importDefault(require("./Line3D")); // default
var Point3D_1 = __importDefault(require("./Point3D")); // destructure as an import
var message = "Hello World!";
var small = message.toLowerCase();
console.log("small " + small);
// for primitives its not that important...
var newMessage = "Hello New World!";
console.log("NEW BIG: " + newMessage.toUpperCase()); // string template
// initialize TS number
var newNumer = 5;
console.log("newNumer: " + newNumer); // string template
// initialize TS boolean
var newBoolean = false;
console.log("newBoolean: " + newBoolean); // string template
// now run it 'npm run start' and see if it appears in the console!
/**
small hello world!
NEW BIG: HELLO NEW WORLD!
newNumer: 5
newBoolean: false
*/
// Arithmetic Operators
var x = 0;
console.log("x = 0; " + x);
x = x + newNumer; // = 5
console.log("x = x + newNumer; " + newNumer);
x += newNumer; // = 10
console.log("x += newNumer; " + newNumer);
// const notANum = '5';
// x = x + notANum; // Type 'string' is not assignable to type 'number'.ts(2322)
x = x++;
console.log("x++; " + newNumer);
x = x--;
console.log("x--; " + newNumer);
var xGtNewNum = x > newNumer;
console.log("xGtNewNum; " + xGtNewNum);
// Functions
// internet example: function function_name (param1[:type], param2?[:type]): returnType
//                   KEYWORD  <arbitrary>   (parameter [:optionalParamType], parameterOptional2? [:string]): typeOfReturn
function ourLoggerFunction(a, b) { console.log('ourLoggerFunction', a, b); }
// function ourLoggerFunctionVanilla (a, b) {}
ourLoggerFunction('log this');
ourLoggerFunction('log and this', 'optional that');
function mySumFunction(a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 0; }
    return a + b;
}
var result0 = mySumFunction(1, 2);
console.log("mySumFunction(1,2); " + result0);
var result1 = mySumFunction(1);
console.log("mySumFunction(1); " + result1);
// Arrays
// const arr = [1, 2, 3]; // vanilla js
var arr = [1, 2, 3]; // TypeScript
// const arr: number[] = [1, 2, 3]; // TypeScript, this is valid too!!!
// Tuple != Array, looks the same tho
var tup = [1, 'number two', 3];
// const tup: (string|number)[] = [1, 'number two', 3];
console.log("tup; " + tup);
tup.pop();
console.log("tup.pop(); " + tup);
var cat = {
    age: 5,
    name: 'Black'
};
util_1.hi();
// const point = new Point(true);
// point.exists();
console.log('\n\n\nNova lekcija');
console.log('\n\n\nAnonimni interfejs');
function greet(person) {
    return "This is a person with a name: " + person.name + " and an age: " + person.age;
}
var person = { name: 'Ime', age: 25 };
console.log("Logger: " + greet(person)); // Template Strings
console.log('\n\n\nDeklarisani interfejs');
// TERNARY operator ?
function greetNew(person) {
    return "This is a person with a name: " + person.name + " and an age: " + person.age + ". " + (person.airplane ? 'Has an airplane.' : ''); // template string `` with inner variable `${}`
}
var personNew = { age: 35, name: 'Asdf' };
console.log("Logger: " + greetNew(personNew));
var personNewWithAPlane = { age: 65, name: 'Qwerty', airplane: true };
console.log("Logger: " + greetNew(personNewWithAPlane));
var employedPerson = {
    age: 44,
    name: 'Zxcvb',
    salary: 900000,
    airplane: true,
    dateOfEmployment: '25/05/1999.'
};
console.log("Logger[Person]: " + greetNew(employedPerson));
function greetNewNew(person) {
    return "\nThis is a person with a name: " + person.name +
        ("\nAnd an age: " + person.age + ". ") +
        ("" + (person.airplane ? '\nHas an airplane.' : '')) +
        ("\nAnd has a salary of: " + person.salary) +
        ("\nAnd was employed at: " + person.dateOfEmployment); // template string `` with inner variable `${}`
}
console.log("Logger[EmployedPerson]: " + greetNewNew(employedPerson));
console.log('\n\n\\Kraj lekcije');
console.log('\n\n\\Klase');
// KEYWORD class <your class name> {//code for the class...}
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
// TO USE A CLASS, USE WITH A NEW - KEYWORD new
var p = new Point();
var o = {};
console.log("p: " + p + ", type: " + typeof p + ", JSON: " + JSON.stringify(p));
console.log("p: " + o + ", type: " + typeof o + ", JSON: " + JSON.stringify(o));
// TS EXPECTS A CONSTRUCTOR!!!
// class Point2D {
//     x: number;
//     y: number;
// }
// TS EXPECTS A CONSTRUCTOR!!!
// const p2d = new Point2D();
console.log('with constructors: \n');
// Useless object, just to see that interface and object aint the same thing
var pingable = {
    ping: function ping() { console.log('ping'); }
};
var Sonar = /** @class */ (function () {
    function Sonar() {
    }
    Sonar.prototype.ping = function () { console.log("ping!"); };
    Sonar.prototype.pong = function () { console.log("pong!"); };
    return Sonar;
}());
var sonar = new Sonar();
sonar.ping();
sonar.pong();
// ^- END interface plus class 
// How to extend a class without parameters:
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log("Moving along!");
    };
    return Animal;
}());
var someAnimal = new Animal();
console.log(someAnimal);
someAnimal.move();
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.woof = function (times) {
        // for is a KEYWORD, used to make a loop 
        // e.g. repeat code in the brackets n times
        for (var i = 0; i < times; i++) {
            console.log('woof!');
        }
    };
    return Dog;
}(Animal));
var dog1 = new Dog();
console.log(dog1); // .eslintrc
dog1.move();
dog1.woof(2);
// ^--- end how to extend class w/o parameters
// How to extend class with parameters and constructors + super:
var Sizes;
(function (Sizes) {
    Sizes[Sizes["tiny"] = 0] = "tiny";
    Sizes[Sizes["small"] = 1] = "small";
    Sizes[Sizes["medium"] = 2] = "medium";
    Sizes[Sizes["large"] = 3] = "large";
    Sizes[Sizes["huge"] = 4] = "huge";
})(Sizes || (Sizes = {}));
// const tiny = 'tiny'; const small = 'small'; ...
// const availableSizes = [tiny, small, ...]
// read more @ https://www.typescriptlang.org/docs/handbook/enums.html
// CSR is a short of ConsTructoR, random name.
var AnimalCsr = /** @class */ (function () {
    function AnimalCsr(size) {
        this.size = size;
    }
    AnimalCsr.prototype.move = function () {
        console.log("Moving along!");
    };
    return AnimalCsr;
}());
var someAnimalCsr = new AnimalCsr(Sizes.medium);
console.log(someAnimalCsr);
someAnimalCsr.move();
var DogCsr = /** @class */ (function (_super) {
    __extends(DogCsr, _super);
    function DogCsr(name, age, size) {
        var _this = _super.call(this, size) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    DogCsr.prototype.woof = function (times) {
        // for is a KEYWORD, used to make a loop 
        // e.g. repeat code in the brackets n times
        for (var i = 0; i < times; i++) {
            console.log('woof!');
        }
    };
    return DogCsr;
}(AnimalCsr));
var dogCsr1 = new DogCsr('black', 3, Sizes.small);
console.log(dogCsr1);
// dogCsr1.name = 'black'
dogCsr1.age = 3;
// dogCsr1.move();
dogCsr1.woof(2);
var dogCsr2 = new DogCsr('green', 7, Sizes.small);
console.log(dogCsr2);
var mapOfSizesToString = (_a = {},
    _a[Sizes.tiny] = 'a tiny animal',
    _a[Sizes.small] = 'a small animal',
    _a[Sizes.medium] = 'a medium animal',
    _a[Sizes.large] = 'a large animal',
    _a[Sizes.huge] = 'a huge animal',
    _a);
console.log("dogCsr2 has a size of " + mapOfSizesToString[dogCsr2.size]);
// ^--- END how to extend class with parameters and constructors + super
// TO MAKE AN INSTANCE, IS TO USE NEW WITH A CONSTRUCTOR
var p2D = new Point2D_1.Point2D();
console.log("p: " + p2D + ", type: " + typeof p2D + ", JSON: " + JSON.stringify(p2D) + ", position: " + p2D.position());
var p2DNewBoth = new Point2D_1.Point2D(1, 10);
console.log("p: " + p2DNewBoth + ", type: " + typeof p2DNewBoth + ", JSON: " + JSON.stringify(p2DNewBoth) + ", position: " + p2DNewBoth.position());
var p2DNewWithX = new Point2D_1.Point2D(1);
console.log("p: " + p2DNewWithX + ", type: " + typeof p2DNewWithX + ", JSON: " + JSON.stringify(p2DNewWithX) + ", position: " + p2DNewWithX.position());
var p2DNewWithY = new Point2D_1.Point2D(undefined, 1);
console.log("p: " + p2DNewWithY + ", type: " + typeof p2DNewWithY + ", JSON: " + JSON.stringify(p2DNewWithY) + ", position: " + p2DNewWithY.position());
var l1 = new Line_1.Line2D(p2D, p2DNewBoth);
console.log(l1.toString());
var l2 = new Line_1.Line2D(p2DNewWithX, p2DNewWithY);
console.log(l2.toString());
var isL1GreaterThanL2 = Line_1.Line2D.compareLines(l1, l2);
console.log("Line l1 is greater than l2: " + isL1GreaterThanL2);
// NEW TOPIC ABOUT MODULES:
console.log('\nNEW TOPIC ABOUT MODULES\n');
var p3d = new Point3D_1.default(0, 0, 0);
console.log("p3d instance of the Point3D class: " + p3d.position());
var p1 = new Point3D_1.default(0, 0, 0);
var p2 = new Point3D_1.default(0, 2, 4);
var p3 = new Point3D_1.default(0, 1, 1);
var p4 = new Point3D_1.default(0, 11, 22);
var l3d1 = new Line3D_1.default(p1, p2);
var l3d2 = new Line3D_1.default(p3, p4);
console.log("line l1 has greater length than line l2: " + Line3D_1.default.compareLines(l3d1, l3d2));
//# sourceMappingURL=index.js.map