// speed limit = 70
// 5-> 1 point

function checkSpeed(speed) {
    const speedLimit = 70;
    const KMperpoint = 5;
    const maxPoints = 12;
    
    if (speed <= speedLimit + KMperpoint){
        console.log('OK');
        return;
    }
    
    const points = Math.floor((speed - speedLimit)/KMperpoint);
    if (points >= maxPoints)
        console.log("Licence suspeneded");
    else
        console.log("points", points);
        
}

checkSpeed(45);
