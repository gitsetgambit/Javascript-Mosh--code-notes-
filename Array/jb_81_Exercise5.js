// greatest number by reduce method
function getMax(array) {
    if (array.length === 0) return undefined;
    
    return array.reduce((a,b) => (a>b) ? a : b)
}

max = getMax([1,1,2,2,3,3,3])
console.log(max);
