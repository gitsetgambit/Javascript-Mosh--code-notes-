const numbers = [1,2,3,4];

// 1st way 
for (let i of numbers)
console.log(i);

// 2nd way
// we can aslo get index in this way
numbers.forEach((i,index) => console.log(index,i));