// // fixme: all the loops are infinite
let i = 0;
while (i < 5) {
    console.log(i);
    // i++;
}

// // fixme: it'll untill its true which is infinite
while (true) {
    console.log(i);
}

// // fixme: untill its true which is infinite first similar rules of do while applies
do {
    console.log(i);
} while (true);

// fixme: also another infinite loop
for (let i = 0; (i) => 10; i++) {
    console.log(i);
}
