//total hrs studied 15

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let input = x.toString()
  if (input[0] !== input[input.length - 1]){
    return false
  }  

  for (i = 0; i < Math.ceil(input.length / 2); i++){ 
    if(input[i] !== input[input.length - i - 1]){
        return false
    }
  }

  return true
};




/*
0  1  2  3  4  5
1  2  3  3  2  1
did this solution in 15 min with no help!
*/


console.log("🚀 ~ isPalindrome(2222):", isPalindrome(1212))
