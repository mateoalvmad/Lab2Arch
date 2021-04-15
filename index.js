const interface = require('readline-sync');
var calculator = require('./app/calculator');

const numA = interface.question("Ingrese el primer número: ");
const numB = interface.question("Ingrese el segundo número: ");

var a = parseInt(numA);
var b = parseInt(numB);

console.log(`Add ${a} + ${b} = ${calculator.add(a, b)}`);
console.log(`Minus ${a} - ${b} = ${calculator.minus(a, b)}`);
console.log(`Multiply ${a} * ${b} = ${calculator.multiply(a, b)}`);
console.log(`Divide ${a} / ${b} = ${calculator.divide(a, b)}`);
