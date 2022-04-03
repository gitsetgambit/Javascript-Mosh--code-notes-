// new method of setting deaful method
function interest(principal, rate, year=5) {

    // old method for setting deaful parameter values
    // rate = rate || 3.5
    // year = year || 5

    return principal * rate / 100 * year;
}

console.log(interest(2,4));