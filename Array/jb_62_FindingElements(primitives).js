const numbers = [1,3,5,8,'a'];

// it return -1 when element is not present 
console.log(numbers.indexOf(5));

console.log(numbers.lastIndexOf(8));

// its a old techinque 
console.log(numbers.indexOf(1) !== -1);

// this one is better to find if the element is present or not
console.log(numbers.includes(90));

// here we give a second reference to check from where we have to start to check
// here (5,2) 2 is the reference from where it'll start checking
console.log(numbers.indexOf(5, 2));