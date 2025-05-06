/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    startVal = init
    return {
        increment: function (){
            return ++init
        },
        decrement: function (){
            return --init
        },
        reset: function (){
            init = startVal
            return init
        }
    }
}

  const counter = createCounter(5)
  console.log("🚀 ~ counter.increment():", counter.increment()) 
  console.log("🚀 ~ counter.increment():", counter.increment()) 
  console.log("🚀 ~ counter.increment():", counter.increment()) 
  console.log("🚀 ~ counter.reset():", counter.reset()) 
  console.log("🚀 ~ counter.decrement():", counter.decrement()) 

  
 