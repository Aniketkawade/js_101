let count_factors=0;
for(let i=1;i<=70;i++){
 let count_factors=0;
  
  for (let j=1;j<=i;j++){
    
    if(i%j == 0){
      count_factors++;
    }
  }
 if (count_factors === 2){
  console.log(i, "Prime");
} else {
  console.log(i, "Not Prime");
}
}