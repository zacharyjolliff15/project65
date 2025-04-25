//.innerHTML changes everything inside the HTML Box
//.textContent changes only the text inside the html box

function lighton() {
    document.getElementById('light').src='/project/src/images/greenlight.jpg';
    document.getElementById('onOff on').innerText="On"
    alert("Light is on!")
    console.log("light is on")
}

function lightoff() {
    document.getElementById('light').src='/project/src/images/redlight.jpg';
    document.getElementById('onOff off').innerText="Off"
    window.alert("Light is off!")
    console.log("light is off")

}

function disappear(){
    document.getElementById('light').style.display='none';
}

function reappear(){
    document.getElementById('light').style.display='block';
}