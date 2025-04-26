//.innerHTML changes everything inside the HTML Box
//.textContent changes only the text inside the html box


let totalClicks = 0;
let greenClicks = 0;
let redClicks = 0;

function lighton() {
    document.getElementById('light').src='/project/src/images/greenlight.jpg';
    document.getElementById('onOff on').innerText="On"
    // alert("Light is on!")
    addOn()
    clickInfo()

    if (greenClicks  % 2 == 0){
        document.getElementById('onOff on').innerText="Press for Go"
    }
}

function lightoff() {
    document.getElementById('light').src='/project/src/images/redlight.jpg';
    document.getElementById('onOff off').innerText="Off"
    // window.alert("Light is off!")
    addOff()
    clickInfo()

    if (redClicks % 2 == 0){
        document.getElementById('onOff off').innerText="Press for Off"
    }
}

function disappear(){
    document.getElementById('light').style.display='none';
}

function reappear(){
    document.getElementById('light').style.display='block';
}


function clickInfo(){
    totalClicks = greenClicks + redClicks;
    console.log("total green clicks: " + greenClicks)
    console.log("total red clicks: " + redClicks)
    console.log("total clicks: " + totalClicks)
}

function addOn() {
    greenClicks++;
}

function addOff(){
    redClicks++;
}
