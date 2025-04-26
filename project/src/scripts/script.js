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

let nums = [2,5,5,11]
let target = 10
let twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target){
                return console.log([i,j]);            }
        }
    }
};

twoSum(nums,target);

