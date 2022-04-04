// todo: some falsy values
/*
- undefined
- null
- ''
- false
- 0 
- NaN
*/ 
const array = [1,2,3];

function countTruthy(arr) {
    let count = 0 
    for (let value of arr)
        // here just "value will automatically checked if its true"
        if (value)
            count++;
            console.log(count); 
                   
}

countTruthy(array) 

