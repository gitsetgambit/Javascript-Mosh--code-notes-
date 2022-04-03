const person = {
    firstName: 'mosh',
    lastName: 'hamedani',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}

// setting the name
person.fullName = 'valkrie vulcan'
// getting the name
console.log(person.fullName);

// todo: its a great program we are using getters and Setters

// getter  & setters are are used to set the values inside any 
// function or object
