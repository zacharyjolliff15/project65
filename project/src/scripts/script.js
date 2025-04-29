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

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    for (let i = 0; i < s.length; i++){
        switch(s[i]){
            case "I":
                s[i] = "1"; 
            break

            case "V":
                s[i] = "5"; 
            break

            case "X":
                s[i] = "10"; 
            break

            case "L":
                s[i] = "50"; 
            break

            case "C":
                s[i] = "100"; 
            break

            case "D":
                s[i] = "500"; 
            break

            case "M":
                s[i] = "1000"; 
            break
        }

    }
    let concatStr = "";
    for (let j = 0; j < s.length; j++){
        console.log(s)
        const currentValue = s[j];
        concatStr += currentValue;
    }

    console.log("🚀 ~ romanToInt ~ concatStr:", s)


};


s = "LVIII"
romanToInt(s)
