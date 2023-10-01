//Declaring a number in Traditional Way

const Num1=45;

console.log(Num1);


// Another Way
const NewNum1= new Number(56);
console.log(NewNum1);

//to Local String

// const LongNum=5600000000000;

// console.log(LongNum.toLocaleString());



//////////////// Maths ///////////////////////////

// console.log(Math);

// console.log(Math.abs(-45)); //Negatvie to Positive 

// console.log(Math.round (45.65)); //Negatvie to Positive 

// Flooor and Ceeling


//Min and MAx
// console.log(Math.min(45.76,979,9,0));

// //Max
// console.log(Math.max(45.76,979,9,0));

//Random


console.log((Math.random()*10) + 1);

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max - min + 1))+min);
