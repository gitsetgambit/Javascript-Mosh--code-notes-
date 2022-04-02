const first = [1,3,5,6,8,4];
const second = [4,6,5,7,2];


const combined = [...first, 'a', ...second, 'b']

const copy = [...combined];
console.log(copy);
 