// factory function 
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}
const myCircle = createCircle(1);
// construct Function 
function Cricle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
};

const circle = new Circle(1);

// when we use "new" operator 3 things happen 
//  - makes a empty object
//  - and it set 'this' to new empty object
//  - it returns this new object
