/**
 *https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript
 * Write a function that returns a string in which firstname is swapped with last name.
nameShuffler('john McClane'); => "McClane john"
 */

function nameShuffler(str){

const zodziai = str.split(" ");

return (`${zodziai[1]} ${zodziai[0]}`);
}

  nameShuffler('john McClane')


  
// const str3 =str.slice(5);

// return (str3, str2)
// }