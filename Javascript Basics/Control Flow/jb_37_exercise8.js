let array = [];

function sumOF(limit) {
    for (let i = 0; i <= limit; i += 3) {
        array.push(i);
    }
    for (let j = 0; j <= limit; j += 5) {
        array.push(j);
    }
    let sum = 0;
    for (let r = 0; r < array.length; r++) {
        sum += array[r];
    }
    return sum;
}

console.log(sumOF(20));

///////////////////////////////////////////////////////////////////////
// todo: another way

function arraysum(limit) {
    let sum = 0;
    for (let i = 0; i <= limit; i++) {
        if (i % 3 == 0 || i % 5 == 0) 
            sum += i;
    }
        return sum;
}

console.log(arraysum(20));
