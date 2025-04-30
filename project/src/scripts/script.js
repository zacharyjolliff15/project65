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
const result = (function(a, b) {const sum = a + b; return sum;})

(1,2)
console.log(result)

const IIFEsubtract = (function(x,y) {const sub = x - y; return sub})
(6,2)
console.log(IIFEsubtract)