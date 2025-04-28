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


class BankAccount {
    constructor (accountNumber, accountHolderName, balance = 0.0){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
}

// Example of creating a BankAccount object:
const account1 = new BankAccount("12345", "Alice", 100.50);
const account2 = new BankAccount("67890", "Bob"); // balance will be 0.0 by default

console.log(account1.accountNumber); // Output: 12345
console.log(account1.balance);       // Output: 100.5

console.log(account2.accountNumber); // Output: 67890
console.log(account2.balance);       // Output: 0

//git test