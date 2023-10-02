  function CalculateCardPrice(...num1){  //Parameters
        return num1 //Spraed
  }

  console.log(CalculateCardPrice(45,67,87,78,998,99)); ///Arguments

// Handling Objects

//   const UserShoopingDetail ={
//     UserName : "Raja Umar" ,
//     Age : 56,
//     TotalItemsPurchased : 7,
//     TotalBill : 78667 
//   }

//  function HandleObj(anyObj){
//  console.log( `the Username is ${anyObj.UserName} and age is ${anyObj.Age}. He made total ${anyObj.TotalItemsPurchased} Purchase`);
//  }

//  HandleObj(UserShoopingDetail);

// Handling Arrays

const Arr1 = [67, 98 , 87 , 98];

function HandleArray(Newarr){
   return Newarr [5]


}

console.log(HandleArray(Arr1));



const Arr4 =[ 'Umar', "rajaa" , "Mushtaq"];

function NameHandler(e){
return e [0]
}

console.log(NameHandler(Arr4));

const NameOfPlayers = ["Messi", "Ronalo","Romas", "Jordi Alba"];
function PlayerHandler(Arrr){
  return Arrr [1]
}
NameOfPlayers.push("Bisqit", "terstagen");


console.log(NameOfPlayers);

  console.log(PlayerHandler(NameOfPlayers));



