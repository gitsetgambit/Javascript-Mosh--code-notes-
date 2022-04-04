// sum of arguments

// with normal "arguments" keyword
function sum() {
    let total = 0
    for (let i of arguments){
        total = total + i
    }
    return total
}    
console.log(sum(1,2,3,4,53));

// with "rest ..." operator and "reduce" function
function sum2(...values) {
    if (values.length === 1 && Array.isArray(values[0]))//just checking the entered values
    values = [...values[0]]
    return values.reduce((a,b) => a+b)
}
console.log(sum2(2,4,6,3));

