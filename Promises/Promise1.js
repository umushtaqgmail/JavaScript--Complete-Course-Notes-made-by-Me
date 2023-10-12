//   const promise = new Promise(function(resolve, reject){
    

//     setInterval( function(){
//         console.log("Raja Umar");
//         resolve();
//     }
// , 1000)});

// promise.then(function(){
//     console.log("Raja UMarv3");
// })



 const promise = new Promise(function(resolve,reject){
     setInterval(function(){
        console.log("Raja Umar");
        resolve();
     },1000)
 }).then(function(){
    console.log("Asyn is Del");
 })


