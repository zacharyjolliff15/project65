//JS closure example that is really cool
function createMult(factor){
    return function (number){
        return number * factor
    }
}  

const double = createMult(2)
const triple = createMult(3)


console.log(double(5));   // Output: 10
console.log(triple(5));   // Output: 15