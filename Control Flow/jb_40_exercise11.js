// fixme: this technique is maybe flawed
function checkPrime(input) {
    for (let i=2; i<=input; i++){
        if (input%i==0) 
            return "not prime"
        else  
            return "prime"
    }
}


// todo: another way 
const isItPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) 
        return false; 
    return num > 1;
}


// todo: mosh's method for printing all prime and check if prime

function showPrime(limit) {
    for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
    for(let factor = 2; factor < number; factor++)
    if (number% factor === 0)
    return false;

return true;
    
}
console.log(showPrime(19));