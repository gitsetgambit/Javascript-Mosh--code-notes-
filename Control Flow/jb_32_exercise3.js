function fizzbuzz(input) {
    if (typeof input != 'number')
        return NaN;
    else if (input%3==0 && input%5==0)
        return "fizzbuzz";
    else if (input%3==0)
        return "fizz";
    else if (input%5==0)
        return "buzz";
    else
        return input;
}

console.log(fizzbuzz(33));

// divisible by 3    -> fizz 
// divisible by 5    -> buzz 
// divisible by both -> fizzbuzz 
// divisible by 3    -> return the number 
// not a number      -> 'not a number'

// NaN is a interesting return learn about it 