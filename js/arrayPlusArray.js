/*https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

*/




function arrayPlusArray(arr1, arr2) {
    
    let sumArr1 = 0;
    for (let i=0; i<arr1.length; i++){
        const skaicius = arr1[i];
        sumArr1 = arr1[i] +sumArr1
    }
    let sumArr2 = 0;
    for (let i=0; i<arr2.length; i++){
        const skaicius2 = arr2[i];
        sumArr2 = arr2[i] +sumArr2
    }
const sudetis = sumArr1+ sumArr2
    
    return(sudetis) 
  }
  
  
  
  arrayPlusArray([1, 2, 3], [4, 5, 6]);
  arrayPlusArray([-1, -2, -3], [-4, -5, -6])


  /**
   * 
   * function arrayPlusArray() {
    var res = 0;

  for (var i = 0 ; i < arguments.length; i+=1) {

    for (var j = 0; j < arguments[i].length ; j +=1) {

      res+=arguments[i][j];
    }
  }
 return res;
}
   */