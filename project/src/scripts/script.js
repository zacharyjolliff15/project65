// //JS closure example that is hurts my head

// function createMult(factor){
//     return function (number){
//         return number * factor
//     }
// }  

// const double = createMult(2)
// const triple = createMult(3)


// console.log(double(5));   // Output: 10
// console.log(triple(5));   // Output: 15

//JS example that hurts my head called Immediately Invoked Function Expression
// const result = (function(a, b) {const sum = a + b; return sum;})

// (1,2)
// console.log(result)

// const IIFEsubtract = (function(x,y) {const sub = x - y; return sub})
// (6,2)
// console.log(IIFEsubtract)

//Arrow Syntax
// const f = (a, b) => a+b
// console.log(f(3, 4)); // 7

//spread syntax for array
const fruits1 = ['apple', 'banana'];
const fruits2 = ['orange', 'grape'];

const combinedFruitsspread = [...fruits1, ...fruits2]
console.log(combinedFruitsspread)

const person = { name: 'Alice', age: 30 };

//spread syntax for object

// Without spread syntax, copying can be more manual:
const personCopy_old = {};
for (const key in person) {
  personCopy_old[key] = person[key];
}
console.log(personCopy_old); // Output: { name: "Alice", age: 30 }

// With spread syntax, it's very straightforward:
const personCopy_new = { ...person };
console.log(personCopy_new); // Output: { name: "Alice", age: 30 }