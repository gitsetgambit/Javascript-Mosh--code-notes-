const numbers = [1,2,3,4,5,6];

// end 
const last = numbers.pop();
console.log(numbers);
console.log(last);

// beggining
const first = numbers.shift();
console.log(first);

// middle
// here we are deleting two elements starting from index 2
const mid = numbers.splice(2, 2);
console.log(numbers);
console.log(mid);
