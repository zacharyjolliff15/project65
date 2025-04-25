//.innerHTML changes everything inside the HTML Box
//.textContent changes only the text inside the html box

function lighton() {
    document.getElementById('light').src='/project/src/images/greenlight.jpg';
}

function lightoff() {
    document.getElementById('light').src='/project/src/images/redlight.jpg';
}

function disappear(){
    document.getElementById('light').style.display='none';
}

function reappear(){
    document.getElementById('light').style.display='block';
}