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
// x = 0;
// var isPalindrome = function(x) {
//     const input = x.toString();
//     if (input.length <= 1){
//         console.log("🚀 ~ isPalindrome ~ true:", true)
//         return true;
//     }

//     part1even = input.slice(0,input.length / 2)
//     part2even = input.slice(input.length / 2 , input.length)
//     part2Evenreversed = part2even.split("").reverse().join("")

//     if (part1even == part2Evenreversed){
//         console.log("🚀 ~ isPalindrome ~ true:", true)
//         return true
//     }
   
//     part1odd = input.slice(0,(input.length + 1) / 2)
//     part2odd = input.slice(input.length / 2, input.length)
//     part2Oddreversed = part2odd.split("").reverse().join("")

//     if (part1odd == part2Oddreversed){
//         console.log("🚀 ~ isPalindrome ~ true:", true)
//         return true
//     }

//     else{
//         return false
//     }
// };
// isPalindrome(x)


//  3)roman numerals


//If the values from left to right are in perfect order, we can just add them up as they are
//have two loops, the second one is off by i + 1 and checks to see if the value to right is larger then the left, subtract from total

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanToIntObject = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    };
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if (romanToIntObject[s[i]] < romanToIntObject[s[i + 1]]) {
            result -= romanToIntObject[s[i]];
        } else {
            result += romanToIntObject[s[i]];
        }
    }
    console.log("🚀 ~ romanToInt ~ result:", result)
    return result;
};
s = "XLIX"
romanToInt(s)

/*
i	s[i]	s[i+1]	value(s[i])	value(s[i+1])	value(s[i])<value(s[i+1])?	result change	running total
0	X	L	10	50	10 < 50 → true	–10	–10
1	L	I	50	1	50 < 1 → false	+50	40
2	I	X	1	10	1 < 10 → true	–1	39
3	X	undefined	10	undefined	10 < undefined → false	+10	49

*/