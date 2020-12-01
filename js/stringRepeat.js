/**https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
 * Write a function called repeat_str which repeats the given string src exactly count times.
repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
 */

function repeatStr (n, s) {
    let simbolis = ''
    for(let i=0; i<n; i++){
        simbolis = simbolis + s;   
    }
    return (`"${simbolis}"`)
  }

  repeatStr(3, "helo");

//   function repeatStr (n, s) {
//     return s.repeat(n);
//   }