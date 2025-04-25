//.innerHTML changes everything inside the HTML Box
//.textContent changes only the text inside the html box


let totalClicks = 0;

function lighton() {
    document.getElementById('light').src='/project/src/images/greenlight.jpg';
    document.getElementById('onOff on').innerText="On"
    alert("Light is on!")
    console.log("light is on")
    clickAdd(1)
}

function lightoff() {
    document.getElementById('light').src='/project/src/images/redlight.jpg';
    document.getElementById('onOff off').innerText="Off"
    window.alert("Light is off!")
    console.log("light is off")
    clickAdd(5)
}

function disappear(){
    document.getElementById('light').style.display='none';
}

function reappear(){
    document.getElementById('light').style.display='block';
}


function clickAdd(num){
    totalClicks = totalClicks + num;
    console.log(totalClicks)
    return totalClicks
}