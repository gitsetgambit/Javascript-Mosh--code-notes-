// normal function Declaration
function walk() {
    console.log('walk');
}

// Anonymous/name function Epression 
const run = function(params) {
    console.log('run');
}
let move = run
run()
move()