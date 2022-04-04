const color = 'red' //global variable

    {
    let plane = "embraer" //let declares a variable inside any code bloack 
    var bike = "yz" //var represent the global variable declared in any code block
    const message = 'hi' //its bounded in this code block
    console.log(color); //its working with global variable const "color"
    }

console.log(plane); //plane vairable is only declared inside the above code block
console.log(bike); //bike is now global variable with "var"
console.log(message); //it can't access the message variable inside code block