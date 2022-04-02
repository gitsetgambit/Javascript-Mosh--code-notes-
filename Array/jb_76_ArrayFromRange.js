// running the loop between the range by using function

const numbers = Range(-10,-4)

console.log(numbers);

function Range(min, max) {
    const out = []
    for (let i = min; i <= max; i++)
    out.push(i)
    return out
}