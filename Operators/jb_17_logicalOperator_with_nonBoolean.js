// these are falsy (false) values in js
// undefined
// null
// 0
// false
// ''
// NaN

// Anything that is not false -> truthy

let userColor = "undefined";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);
