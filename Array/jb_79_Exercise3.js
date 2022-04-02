// we want to give array , index , offset to move the number in the array  
const numbers = [1,2,3,4,5]

function move(array, index, offset) {
    const position = index + offset
    if (position >= array || position < 0){
        console.error('invalid offset.:- ');
        return
    }
    const output = [...array]
    // "[0]" was used cuz we wanted the num not the array location
    const element = output.splice(index, 1)[0]
    output.splice(position, 0, element)
    return output
}

console.log(move(numbers, 0, 2));