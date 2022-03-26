const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

/*forin loop is used for iterating over the "key" of object
not the values of array*/
for (let key in circle)
    console.log(key, circle[key]);

/*this is a ofloop it is used for iterating over the "values"
of array majorly
always remeber a object is not a iterable
we can do some stuff to do that like -*/
// "keys" keyword bring out the keys of object
for (let key of Object.keys(circle))
    console.log(key);

// "entries" bring out the both key values and there 2total num
for (let entry of Object.entries(circle))
console.log(entry);

if ('radius' in circle) console.log('yes');