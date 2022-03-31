let adress = {
    street : "7",
    city : "meerut",
    zipcode : "250001",
};

function showAdress(adress) {
    for(let i in adress)
        console.log(i, adress[i]); 
}

showAdress(adress);