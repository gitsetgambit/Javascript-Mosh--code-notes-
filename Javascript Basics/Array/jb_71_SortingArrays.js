// // simple sorting
// const numbers = [2,1,5,6,3,4];
// numbers.sort();
// console.log(numbers);

// // simply reversing sorted array
// numbers.reverse();
// console.log(numbers);

// todo: sorting on objects
const courses = [
    {d:1, name:'node.js'},
    {d:2, name:'javascript.js'}
];

courses.sort(function(a, b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});    

console.log(courses);