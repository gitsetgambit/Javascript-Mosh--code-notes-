// "arguments" is keyword that holds all arguments throw in the object 
// it can be iterated like normal array so we don't need to explicitly 
// define parameters to take the arguments either
function sum() {
    let total = 0    
    for (let values of arguments)
        total = total + values
    return total
}

console.log(sum(2,4,6,7,8,3));