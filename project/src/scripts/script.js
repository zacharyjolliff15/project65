/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let currentCount = n;
    return function() {
        return currentCount++ //remeber that i++ means return i, then increment.
        
    };
};


const counter = createCounter(10)
console.log("🚀 ~ counter():", counter())
console.log("🚀 ~ counter():", counter())



