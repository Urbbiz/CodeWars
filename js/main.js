function stringToArray(string){

let word = '';

for(let i=0; i<=string.length-1; i++) {
   
   word += ','+ string[i];
    
   
}
let template = word.split(', ');
console.log(template);
console.log(word);


}
stringToArray("Robin Singh")
