// logical And (&&)
// returns true if both operands are true
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

// logical OR(||)
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log("eligible", eligibleForLoan);

// logical NOT(!)
let applicationRefused = !eligibleForLoan;
console.log("application refused", applicationRefused);
