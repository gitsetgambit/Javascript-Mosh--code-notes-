// we got diffrent method of joining these arrays
// method 1
const numbers = [1,2,3];
const joined = numbers.join('""');
console.log(joined);

// method 2
const message = 'this is my first message'
const parts = message.split(' ');
console.log(parts);

// method 3
const combined = parts.join('-');
console.log(combined);
