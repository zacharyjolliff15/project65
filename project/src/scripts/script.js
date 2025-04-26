let totalClicks = 0;
let greenClicks = 0;
let redClicks = 0;

//save calls to dom, helps memory
const lightImg = document.getElementById('light');
const onButton = document.getElementById('onOff on');
const offButton = document.getElementById('onOff off');

const light = {
    type: "General Electric",
    cost: 6.99
};
light.size = "medium";

function lighton() {
    greenClicks++;
    totalClicks = greenClicks + redClicks;
    lightImg.src='/project/src/images/greenlight.jpg';
    // alert("Light is on!")
    clickInfo()
    onButton.innerText = greenClicks % 2 === 0 ? "On" : "Press for On";
};

function lightoff() {
    redClicks++;
    totalClicks = greenClicks + redClicks;
    lightImg.src='/project/src/images/redlight.jpg';
    // window.alert("Light is off!")
    clickInfo()
    offButton.innerText = redClicks % 2 === 0 ? "Off" : "Press for Off";
};

function disappear(){
    lightImg.style.display='none';
};

function reappear(){
    lightImg.style.display='block';
};

function clickInfo(){
    console.log("total green clicks: " + greenClicks)
    console.log("total red clicks: " + redClicks)
    console.log("total clicks: " + totalClicks)
    console.log(light.cost)
    console.log(light["size"])
}


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
