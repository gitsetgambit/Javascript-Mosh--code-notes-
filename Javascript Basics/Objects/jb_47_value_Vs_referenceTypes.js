/* valuesTypes    :- number, string, boolean, symbol, undefined, null
   referenceTypes :- objects, function, array */

// primitive are copied by their value
let x = 10;
let y = x;

x = 20;
console.log(x);
console.log(y);

// but object copies the refrence so both get changed 
let a = {value:10};
let b = a;

a.value = 20;
console.log(a);
console.log(b);

