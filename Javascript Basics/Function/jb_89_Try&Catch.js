// fixme: Incomplete code notes
const person = {
    firstName: 'mosh',
    lastName: 'hamedani',
    set fullName(value) {
        if(typeof value != 'string') return
            throw new Error('not a string')

        const parts = value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}
try {
    person.fullName = null
}
catch (e) {
    console.log();
}

person.fullName = null
console.log(person.fullName);

