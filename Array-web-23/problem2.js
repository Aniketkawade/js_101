let char="g";
let lower=["a","b","c","d","e","f","g","h","i"];
let upper=["A","B","C","D","E","F","G","H","I"];
for(let i=0; i<=lower.length-1; i++){
  if (char ==lower[i]){
    char= upper[i];
  }
}
console.log(char);