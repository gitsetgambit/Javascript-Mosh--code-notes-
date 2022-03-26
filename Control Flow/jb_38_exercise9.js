// average = 70 
// 1-59 = F  
// 60-69 = D  
// 70-79 = C  
// 80-89 = B 
// 90-100 = A 

let marks = [80,8,9,100];

function calculateGrade(input) {
    let sum = 0;
    for(i=0; i<input.length; i++){
        sum += input[i]
    }
    let average = sum/input.length
    if (average < 60) return 'F'
    if (average < 70) return 'D'
    if (average < 80) return 'C'
    if (average < 90) return 'B'
    return "A"
}
console.log(calculateGrade(marks));
