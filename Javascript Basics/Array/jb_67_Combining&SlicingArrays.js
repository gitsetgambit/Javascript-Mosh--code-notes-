const first = [1,2,3,4,6,7]
const second = [1,2,3,4,6,7]
const third = [{id:3, name:"aditya"}]

// combined with concat method
const combined = first.concat(second);
console.log(combined);

// combined with slice at index
const slice = combined.slice();
console.log(slice);

// for combining array with array containing object
const combinedObj = first.concat(third);
// here im just going inside the array and changing the "id" value
third[0].id = 10;
console.log(combinedObj);