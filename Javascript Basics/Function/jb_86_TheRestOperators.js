function sum(discount, ...prices) {
    const total = prices.reduce((a,b)=> a+b)
    return total * (1 - discount)
}

console.log(sum(0.2,3,4,5,6));

// todo: rules 
// 1 - here "..." is not spread operator it is "rest operator" 
// 2 - here rest operator changes all coming arguments to a Array 
// 3 - rest operator should be declared after every parameter