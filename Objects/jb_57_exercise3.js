let adress1 = new Adress('a', 'b', 'c');
let adress2 = new Adress('a', 'b', 'c');
let adress3 = adress1;

// constructor funtion 
function Adress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}


function areEqual(adress1, adress2) {
    return adress1.street === adress2.street &&
    adress1.city === adress2.city &&
    adress1.zipCode === adress1.zipCode;
}

function areSame(adress1, adress2) {
    return adress1 === adress2;
}


console.log(areEqual(adress1, adress2));
console.log(areSame(adress1, adress2));
console.log(areSame(adress1, adress3));
