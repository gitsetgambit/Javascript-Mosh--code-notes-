// const means here we cannot reasign a circle variable
// to another object but the attribute or variables inside
//  it can change at any time
const circle = {
    radius: 1
};

// we can add any attribute in the obj at any time
circle.color = 'yellow';
circle.draw = function () {} 

// we can delete those attributes as well
delete circle.color;
delete circle.draw;

// simple printing or logging on screen
console.log(circle);