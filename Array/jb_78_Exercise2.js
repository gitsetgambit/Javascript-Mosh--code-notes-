const demoArray = [1,2,3,4,5,6]

function except(Array, excludedNum) {
    const output = []
    for (let i of demoArray)
            // if we write !excludedNum with include it will remove from the array
        if (!excludedNum.includes(i))
            output.push(i)
    return output;
}

const newArray = except(demoArray,[2,3])
console.log(newArray);