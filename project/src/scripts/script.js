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



//Palindrom problem, first solve as string
x = 0;
var isPalindrome = function(x) {
    const input = x.toString();
    if (input.length <= 1){
        console.log("🚀 ~ isPalindrome ~ true:", true)
        return true;
    }

    part1even = input.slice(0,input.length / 2)
    part2even = input.slice(input.length / 2 , input.length)
    part2Evenreversed = part2even.split("").reverse().join("")

    if (part1even == part2Evenreversed){
        console.log("🚀 ~ isPalindrome ~ true:", true)
        return true
    }
   
    part1odd = input.slice(0,(input.length + 1) / 2)
    part2odd = input.slice(input.length / 2, input.length)
    part2Oddreversed = part2odd.split("").reverse().join("")

    if (part1odd == part2Oddreversed){
        console.log("🚀 ~ isPalindrome ~ true:", true)
        return true
    }

    else{
        return false
    }
};
isPalindrome(x)

