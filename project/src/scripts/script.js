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

// function Person(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     this.fullName = function() {
//       return this.firstName + " " + this.lastName;
//     };
//   }
  
//   const person1 = new Person("Bob", "Johnson");
//   const person2 = new Person("Charlie", "Brown");
  
//   console.log(person1.fullName()); // Output: Bob Johnson
//   console.log(person2.fullName()); // Output: Charlie Brown

  
const person = {
    firstName: "Alice",
    lastName: "Smith",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
    greet: function() {
      console.log(`Hello, my name is ${this.fullName()}.`);
    }
  };
  
  console.log(person.fullName()); // Output: Alice Smith
  person.greet(); // Output: Hello, my name is Alice Smith.

