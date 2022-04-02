// finding the elements in the array or not
const num = [1,2,3,4,5,6]

// instead of using "incudes" funtion create a func to do same thing
// console.log(num.includes(1));

function includes(array, searchElements) {
    for (let i of num)
        if (i === searchElements) 
            return true;
        return false;
}
console.log(includes(num, 2));
