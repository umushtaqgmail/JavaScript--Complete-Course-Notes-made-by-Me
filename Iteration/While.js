 
//  let number = 0;
 
//  while (number <= 20) {
//     console.log(`the number is ${number}`);
//     number++;
//  }


 let SuperHeros = ["Raja","Mina", "fareed"];
let arr=0;
 while(SuperHeros < SuperHeros.length){
    console.log(`suoper heros are ${SuperHeros[arr]}`);
    SuperHeros++;

 }


//  for of loop

 let Arr1 = ["Umar" , "raja", "Khan"]

 for (const number of Arr1) {
    console.log(`The number is ${Arr1}`);
 }

 //Object Iteration

    let languageame = {
      js : "javascript",
      ruby : "Ruby",
      cpp : "C++"
    }

    for (const key in languageame) {
      console.log(`${key} shortcut for ${languageame[key]}`);
    }