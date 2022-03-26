function showStars(rows) {
    let pattern = "";
    for (let row = 0; row<= rows; row++){
        for (let i = 0; i<=row; i++)
            pattern += "*";
        console.log(pattern);
    }
}

showStars(10);


// todo: another easy ways for acheiving same thing 


 for(var i=1; i<=10; i++){
       console.log("* ".repeat(i));
    }