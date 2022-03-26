// for
// while
// do while
// for in
// this one is for-in

const person = {
    name: "aditya",
    age: 30,
};   

// here key accessing only the 
for (let key in person) {
    console.log(key, person[key]);
}

// there are two natations we can use to access the "value"
// of any key of any object 

// Dot Notation 
person.name
// bracket natation
person['name']


// we can do same thing with arrays
const colors = ['red','green','blue'];
for(let index in colors)
    console.log(index, colors[index]);