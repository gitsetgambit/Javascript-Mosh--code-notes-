// todo: here while loop doesnot execute even once when
// condition is false

// let i = 9;
// while (i <= 5) {
//     if (i % 2 !== 0) console.log(i);
//     i++;
// }

// todo: do while will execute even once when the candition
// is false then it'll go inside and check the condition
let i = 9;
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);
