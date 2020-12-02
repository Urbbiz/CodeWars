
/** neissprestas iki galo.... */
function abbrevName(name){
 
 return name.split(" ")
 .map((word) => { 
     return word[0];
    })
    .join('.');
 }
 console.log(abbrevName)
    




abbrevName("Sam Harris")

