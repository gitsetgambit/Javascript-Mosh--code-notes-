// here im proving for functions in js are basically objects
function Circle(radius) {
    console.log("hei");
    let c,a=9,b=7;
    c = a+b
    console.log(c);
    this.radius = radius;
    let diameter = radius * 2 
    console.log(diameter);
    this.color = "red";
    this.draw = function() {
        console.log('draw');
    }
}

// fixme: READ CAREFULLY THE STATEMENTS BELOW

/* here we are not just calling just normal function we are 
calling the funtion which produce result as a object and it 
and take all the attributes and variable from the "this" keyword */
// todo: we use "new" keyword for creating this object that will
// hold all the values of "this" keyword inside the function
// creating a variable for creating this object while calling the 
// calling the function is must
const another = new Circle(1);
console.log(another);

/* here we are calling just a normal function and this will ignore
all the this keyword variables and attributes and functions we have */
console.log(Circle(5));
