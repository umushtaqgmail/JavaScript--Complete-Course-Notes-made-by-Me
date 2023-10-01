// const myName='Raja Umar';
const RepoCount=50;

// console.log(`my name is ${myName} and my Github repos are ${RepoCount}`); //String Interpolation


// Another way to declare a string

const AnotherName= new String("Raja Ibrahim Mushtaq");
// console.log(AnotherName.length);
// console.log(AnotherName.toUpperCase());
// console.log(AnotherName.lastIndexOf());
// console.log(AnotherName.charAt(7));
// console.log(AnotherName.indexOf("I"));

// Trim

const Email="   Raja@gamil.com  "
console.log(Email);
console.log(Email.trim());

// Sub String
const myName="Raja Abdullah";
const nynewName=myName.substring(0, 10);
console.log(nynewName);


// Replace

const Url="https://Google.com/Raja%20Umar";
 const NewUrl=Url.replace("%20", "NoSpaceHerePlzLeave");
 console.log(NewUrl);

 //Includes
console.log( Url.includes("Maryam"));


// 
const StuNames= "Raja Khan Kayani Chaudhary Malik";

console.log(StuNames.split(" " ));


