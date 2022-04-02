// we want to find how many times a given element is reapeting in the array
const array1 = [3,3,4,4,4,5,6,7,8,9,9,9,1,2,1,1,1,5,1]

// todo: basic implementation
// function CountOccurence(array, searchElemnt) {
//     count = 0;
//     for (let i of array)
//         if (i === searchElemnt){
//             count++;
//             }
//         return count
// }
// const NumCount = CountOccurence(array1, 1)
// console.log(NumCount);

// todo: same thing with reduce
function CountWithReduce(array, searchElemnt) {
    return array.reduce((accumulator,current) =>{
        const occurence = (current === searchElemnt) ? 1 : 0;
        return accumulator + occurence;
    }, 0)
}
c = CountWithReduce(array1, 1)
console.log(c);
