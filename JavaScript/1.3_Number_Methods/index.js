// Методы объекта number

const someVar = 10;
const floatVar = 5.5;
const longFloatVar = 3.144562353252;

const inf = Infinity;
const nan = NaN;

const floatStr = "42.5 hello";
const intStr = "42 is best answer";

isFinite(someVar); // true
isFinite(inf); // false

Number.isInteger(someVar); // true
Number.isInteger(floatVar); // false

isNaN(someVar); // false
isNaN(nan); // true

Number.parseFloat(floatStr); // 42.5
Number.parseInt(intStr); // 42

floatVar.toFixed(0); // 6

longFloatVar.toPrecision(3); // 3.14

someVar.toString(); // "10"

// Методы объекта Math

const num = -2;
const floatNum = 4.243;

Math.abs(num); // 2

Math.max(1, 5, -20, 30, 444, 3); // 444
Math.min(0, 5, -400, 546, 23, 42, -999); // -999

Math.pow(num, 2); // 4

Math.random(); // Случайное число от 0 до 1 (не включительно)

Math.ceil(floatNum); // 5
Math.floor(floatNum); // 4
Math.round(floatNum); // 4
Math.trunc(floatNum); // 4




