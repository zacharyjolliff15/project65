/**
 * @param {string} val
 * @return {Object}
 */
  
  var expect = function(val){
    return{
        toBe: function (expectedVal){
            if (val === expectedVal) {
                return true;
              } else {
                throw new Error("Not Equal");
              }
        },
        notToBe: function (expectedVal){
            if (val !== expectedVal) {
                return true;
              } else {
                throw new Error("Equal");
              }
        }
    }
  }

  console.log("Anonymous approach",expect(5).toBe(5));

//toBe and notToBe are anonymous objects that have anonymous methods defined in them?
