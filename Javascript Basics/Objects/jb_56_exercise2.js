let adress = {
    street : "7",
    city : "meerut",
    zipcode : "250001",
};

// todo:
// factory funtion 
// they use the snake case "abcDefg" for the naming convention
function createAdress(street, city, zipcode) {
    return {
        street: 4,
        city:"meerut",
        zipcode:250001,
        };
}
console.log(createAdress());

// todo:
// constructor funtion
// we use pascal notation here
function Adress(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

let adressData = new Adress(2,5,7);
console.log(adressData);