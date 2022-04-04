// string primitive
const message = "this is my first message"
console.log(message.length);
console.log(message[0]);
console.log(message[1]);
console.log(message.includes('not'));
console.log(message.includes('this'));
console.log(message.startsWith('this'));
console.log(message.endsWith('e'));
console.log(message.indexOf('first'));
// this return a new string and does not modify the old one
console.log(message.replace('first','second'));
console.log(message);
// - esacape notation 
console.log('my name is aditya kumar');
// now " ' " becomes part of the string
console.log('my name is \'aditya kumar');
// new line "\n"
console.log('i love \n tomatoes');


// string object
let another = new String('hi')
console.log(another);

