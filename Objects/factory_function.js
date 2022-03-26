// object oriented programming 
function createdCollege(studentNum) {
    const mainu = 67; 
        return {
        studentNum,
        dept: {
            CS : 1,
            Mech : 2,
        },
        admission : true,
        qualification (degree){
            return {
                degree
            }
        }
    };
}
 
college1 = createdCollege(30)

// we're calling a funtion which stored in a variable
console.log(college1.)
// here we are calling the function inside the object which is inside a funtion 
console.log(college1.qualification("PHD"));

// todo: we can create other objects as well 

                  