const numbers = [3,5];

// insert at
// End
numbers.push(5,6);

// begining
numbers.unshift(8,9);

// insert at
// first two values (2,0) are index and elements we want to delete
numbers.splice(2, 0, 'a', 'b');
console.log(numbers);