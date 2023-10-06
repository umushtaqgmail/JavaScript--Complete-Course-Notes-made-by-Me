

( function chai(){
    console.log("chai ah rahi hai");  //Normal IIFE
})();

(() =>{
 {
 console.log("Chai Or Codeee 44");  //Arrow IIFE
 }
}) () ;


// More Examples

((Name)=> {
console.log(`Name is ${Name}`);    //IIFE with Arguments 
})("Umar")