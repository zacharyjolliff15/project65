/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function f() {
        return "Hello world"
    }
 
    
    
}


const f = createHelloWorld();
 f(); // "Hello World"
 

//  Write a function createHelloWorld. It should return a new function that always returns "Hello World".
// 