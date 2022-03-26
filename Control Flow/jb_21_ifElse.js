// hour:
// if hour is between 6am and 12pm: good morning
// if it is between 12 am and 6 pm: Good afternoon
// otherwise Good evening
let hour = 20;

if (hour >= 6 && hour < 12) {
    console.log("good morning");
} else if (hour >= 12 && hour < 18) {
    console.log("good afternoon");
} else {
    console.log("good evening");
}
