// Примитивные типы:

const num = 1;
const nan = NaN;
const positiveInf = Infinity;
const negativeInf = -Infinity;

const bigint = 1n;

const str = "hello world";
const otherStr = 'hello world';
const complexStr = `5 - 4 = ${num}`;

const bool = true;

const nul = null;
console.log(typeof nul); // object

const undef = undefined;

const id = Symbol(1);

// Непримитивные типы:
const obj = {
    name: "Boris",
    surname: "Karabut",
};

console.log(typeof num); // number
console.log(typeof(str)); // string

console.log(!!otherStr); // true

