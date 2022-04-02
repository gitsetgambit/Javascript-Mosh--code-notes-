const numbers = [1,2,3,4,5]

// every()
// some()

const allPositive = numbers.every(function(value) {
    return value >= 0
})

console.log(allPositive);