//total hrs studied 16

//9 minutes off

/**
 * @param {string[]} strs
 * @return {string}
 */


 // need to iterate through each string in the array but only as much as the shortest lengthed input
 // should have a common array that is outside of loop and if all 3 have the same letter then push that value into the array,
 var longestCommonPrefix = function(strs) {
  //emmpty array i will push out answer to
  const commonArr = [];

  let shortestInputLength = 0;
  for (i = 0; i < strs.length - 1; i++){
    if(strs[i].length < strs[i + 1].length){
      shortestInputLength = strs[i].length;
    }
  }

  for (i = 0; i < strs.length; i++){
    for(j = i + 1; j < strs.length; j++){
      if(strs[i]){

      }
    }
  }

 };

 strs = ["flower", "flow", "flights"]
 console.log("🚀 ~  longestCommonPrefix(strs):",  longestCommonPrefix(strs))
