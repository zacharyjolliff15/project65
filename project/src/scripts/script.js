//Constructer function for dog objects
function dog(color, weight, kidFriendly) {
    this.color = color;
    this.weight = weight;
    this.kidFriendly = kidFriendly;
    this.worseThancats= true;
}

const dog1 = new dog("red",120,false) ;
const dog2 = { color: "brown", weight: 85, kidFriendly: true };
const dog3 = { color: "yellow", weight: 45, kidFriendly: false, gay: false };
const dog4 = new dog("greensih", 200, true, 234, 444, 477) //extra arguements ignored, but accesible
