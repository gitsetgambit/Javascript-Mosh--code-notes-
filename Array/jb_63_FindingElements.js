const courses = [
    {id:1, name: 'a'},
    {id:2, name: 'b'}
];

// todo: this is called predicated function
// just simply create a function with variable along with it 
// and then just check a.name ==='a' for exact checking
const a = courses.find(function(a){
    return a.name ==='a';
});
console.log("yess it is:- ",a);

// here findIndex looks for the index     
const b = courses.findIndex(function(b){
    return b.name ==='a';
});

console.log("yess it is:- ",b);