const circle = {
    radius :1,
    draw() {
        console.log("draw");
    }
}
console.log("Actual Object",circle);

// now this is conventional method declaring a empty
// object and then further assigning values to it 
const another = {};
for (let key in circle)
    another[key] = circle["radius"]
console.log("1st way",another);

// but we can use better thing in modern javascript
Object.assign(a = {},circle)
console.log("2rd way", a);

/*we are not using "const" here because we are actually
assigning all the key values and data to the variable in
another1 so it'll destroy the rule of const "constant" 
so we will declare it with "let" but above situation was diffrent 
see it carefully*/
let another1 = {};
another1 = Object.assign({}, circle);
console.log("3rd way",another1);

// we can add new object to the new cloned object
const another2 = Object.assign({color: 'yellow'}, circle)
console.log(another2);

// by using "spread" operator here we use just three "..." to point
// and assign values to the variable
// by using const we cannot assign anything to "another3" variable
const another3 = {...circle};
console.log(another3);